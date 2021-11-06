import React, { Component } from "react";
import Navigation from "./Navigation";
import AccountSetting from "./AccountSetting";
import NavBar from "../../components/NavBar/NavBar";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className ="container-fluid m-2 row">
                <div>
                    <NavBar/>
                </div>
                <div className="col-3">
                    <Navigation/>
                </div>
                <div className="col-9">
                    <AccountSetting/>
                </div>
            </div>
        )
    }
}
export default Profile;
