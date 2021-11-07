import React, {Component} from 'react';
import SignUpComponent from "./SignUpComponent";
import "./SignUp.css"

class SignUp extends Component {
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
                    <SignUpComponent/>
                </div>
                <div className="col-4">

                </div>
            </div>
        )
    }
}

export default SignUp;