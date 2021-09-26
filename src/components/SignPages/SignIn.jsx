import React, { Component } from 'react'
// import '../styles/footer.css';
import '../styles/login.css';
import Swal from "sweetalert2";
import { getInfo } from "../helperMethods";
import axios from 'axios';
import { createBrowserHistory } from 'history';
import apiURL from '../api_config/APIConfig';
import SiteLogo from '../../image/logo.png';
import { Link } from 'react-router-dom'

import { PageBody, FormContainer, FormBody, LoginInput, FormButton,LOGO } from './SginForm';
const history = createBrowserHistory();
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handelSubmit(e) {
        e.preventDefault();
        let checkValidation = true
        Object.entries(this.state).forEach(([key, value]) => {
            if (value === "") {
                return checkValidation = false;
            }
        })
        if (checkValidation === false) {
            Swal.fire({ icon: 'error', title: "Please Make Sure To Fill the Field Properly" });
        } else {
            axios
                .post(`${apiURL}api/User/login`, {
                    Email: this.state.Email,
                    password: this.state.password
                })
                .then(res => {
                    console.log(res.data);
                    try {
                        if (res.data.success === false) {
                            return Swal.fire({ icon: 'error', title: res.data.message })
                        }
                        localStorage.setItem("currentUser", res.data.token);
                        localStorage.setItem('CountTime', new Date());
                        let jwt = getInfo().data.Role;
                        if (jwt === undefined) {
                            history.push("/");
                        }
                        else if (jwt === "Customer") {
                            console.log(jwt);
                            Swal.fire({
                                icon: 'success',
                                title: ` Welcome  ${getInfo().data.FullName} `,
                                showConfirmButton: false, timer: 1500
                            });
                            history.push('/#/Home')
                        } else if (jwt === "StorageAdmin") {
                            console.log(jwt);
                            history.push("/#/Home");
                            Swal.fire({
                                icon: 'success',
                                title: ` Welcome  ${getInfo().data.FullName} `,
                                showConfirmButton: false, timer: 1500
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: `Email Or Password Doesn't Match`,
                                showConfirmButton: false, timer: 1500
                            });
                        }
                        window.location.reload(false);
                        return res;

                    } catch {
                        console.log("============>");
                        Swal.fire({ icon: 'error', title: res.data.message });

                    }
                })
        }
    }
    render() {
        return (
            <PageBody>
              <LOGO to="/"><img alt="logo" className="LoginLogo" src={SiteLogo} /></LOGO>
                <FormContainer>
                    <h1 className="LoginFormTitle">Login</h1>
                    <FormBody>
                        <LoginInput                 
                        name="Email"
                        type="text"
                        onChange={e => this.handleChange(e)}
                        value={this.state.Email} 
                        placeholder="Email" 
                        required="required" />
                        <LoginInput                
                        name="password"
                        type='password'
                        onChange={e => this.handleChange(e)}
                        value={this.state.password} 
                        placeholder="Password" 
                        required="required" />
                        <FormButton type="submit" onClick={e => this.handelSubmit(e)}>Login</FormButton>
                    </FormBody>
                    {/* <a className="LoginFormText" href="#" >
                        Forgot Password?
                    </a> */}
                    <h5 className="LoginFormText"> <Link to={'SignUp'} className="LoginFormText"> Back To SignUp!</Link></h5>
                </FormContainer>/
            </PageBody>
        )
    }
}