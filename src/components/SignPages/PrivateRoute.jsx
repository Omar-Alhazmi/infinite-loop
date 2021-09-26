import React, { Component } from 'react'
import { getInfo,checkStorage } from '../helperMethods';
import { Redirect, withRouter } from "react-router-dom";
class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: ""
        };
    }
    UNSAFE_componentWillMount() {
        if(checkStorage() !== null && checkStorage() !== undefined){
        let jwt = getInfo().data.Role
        switch (jwt) {
            case 'Customer':
                this.setState({
                    currentUser: jwt
                })
                break;
            case 'StorageAdmin':
                this.setState({
                    currentUser: jwt
                })
                break;
            default:
                <Redirect to={"/SignIn"} />
                break;
        }
    }
    }
    render() {
        const { currentUser } = this.state
        if(checkStorage() !== null && checkStorage() !== undefined){
            switch (currentUser) {
            case 'StorageAdmin':
                return <>{this.props.children[0]}</>
            case 'Customer':
                return <>{this.props.children[1]}</>
            default:
                return <Redirect to={"/SignIn"} />
        }
    } 
       return<Redirect to={"/SignIn"} />
    }
   
}
export default withRouter(PrivateRoute);