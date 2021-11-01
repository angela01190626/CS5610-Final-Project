import React, {Component} from 'react';
import LoginComponent from "./LoginComponent";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row mt-2">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <LoginComponent/>
                </div>
                <div className="col-4">

                </div>
            </div>
        )
    }
}

export default Login;