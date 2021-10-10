import React, { Component } from 'react'
import '../styles/login.css';
import Swal from "sweetalert2";
import { UserRegistration } from '../api_config/api';
import SiteLogo from '../../image/logo.png';
import { Link } from 'react-router-dom'
import { PageBody, FormContainer, FormBody, LoginInput, FormButton, LOGO,SelectItem } from './SginForm';
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            password: "",
            FullName: "",
            Phone: "",
            NationalId: "",
            CompanyName: "",
            SubscriptionPlan: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    // Function to set data in ServiceDescription state
    addUser = User => {
        // Make an api call request to add a new user 
        // let checkValidation = true
        // const stateWithoutEducation = (({ Education, ...o }) => o)(User)
        // Object.entries(stateWithoutEducation).forEach(([key, value]) => {
        //     if (value === "") {
        //         return checkValidation = false;
        //     }
        // })
        // if (checkValidation === false) {
        //     Swal.fire({ icon: 'error', title: " Please Make Sure To Fill the Field Properl" });
        // }
        // else {
            UserRegistration(User)
                .then(response => {
                    console.log(response);
                    let errMessage = response.data.message
                    console.log(errMessage);
                    if (response.data.success === false) {
                        Swal.fire({ icon: 'error', title: response.data.message });
                    }
                    else if (response.data.success === true) {
                        Swal.fire({ icon: 'success', title: "Please Check Your Email For Activation Message" });
                     }
                })
                .catch(error => {
                    Swal.fire({ icon: 'error', title:`Some think went wrong` });
                });
        };
    // }

    handelSubmit = e => {
        // set the object of new user data 
        const newUser = this.state;
        e.preventDefault();
        this.addUser(newUser);
    };
    render() {
        console.log("Reg=======>");
        const { FullName, NationalId, Email, Phone, password, SubscriptionPlan, CompanyName } = this.state;
        return (
            <PageBody>
                <LOGO to="/"><img alt="Logo" className="LoginLogo" src={SiteLogo} /></LOGO>
                <FormContainer SignUp>
                    <h1 className="LoginFormTitle">Login</h1>
                    <FormBody>
                        <LoginInput
                            name="Email"
                            type="text"
                            onChange={e => this.handleChange(e)}
                            value={Email}
                            placeholder="Email"
                            required="required" />
                        <LoginInput
                            name="password"
                            type='password'
                            onChange={e => this.handleChange(e)}
                            value={password}
                            placeholder="Password"
                            required="required" />
                        <LoginInput
                            name="FullName"
                            type='text'
                            onChange={e => this.handleChange(e)}
                            value={FullName}
                            placeholder="FullName"
                            required="required" />
                        <LoginInput
                            name="NationalId"
                            type='number'
                            onChange={e => this.handleChange(e)}
                            value={NationalId}
                            placeholder="NationalId"
                            required="required" />
                            <SelectItem id="SubscriptionPlan"
                                name="SubscriptionPlan"
                                required="required" 
                                onChange={e => this.handleChange(e)}
                                value={SubscriptionPlan} >
                                <option value="" disabled>Subscription Plan</option>
                                <option value="Daily">Daily</option>
                                <option value="Primary">Primary</option>
                                <option value="Premium">Premium</option>
                            </SelectItem>
                        <LoginInput
                            name="Phone"
                            type='number'
                            onChange={e => this.handleChange(e)}
                            value={Phone}
                            placeholder="Phone"
                            required="required" />
                        <LoginInput
                            name="CompanyName"
                            type='text'
                            onChange={e => this.handleChange(e)}
                            value={CompanyName}
                            placeholder="CompanyName"
                            required="required" />
                        <FormButton type="submit" onClick={e => this.handelSubmit(e)}>SignUp</FormButton>
                    </FormBody>
                    <h5 className="LoginFormText"> <Link to={'SignIn'} className="LoginFormText"> Back To Login!</Link></h5>
                </FormContainer>
            </PageBody>
        )
    }
}