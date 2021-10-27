import React, {Component} from "react";

class AccountSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <h1>Account Information</h1>
                <div className="input-group mb-3">
                    <label htmlFor="email-address" className="input-group-text">Email Address</label>
                    <input id="email-address" type="email" className="form-control"/>
                </div>
                <div className="input-group mb-3">
                    <label htmlFor="password" className="input-group-text">Password</label>
                    <input id="password" type="password" className="form-control"/>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
                <hr/>
                <h1>Personal Information</h1>
                <div className="input-group mb-3">
                    <label htmlFor="first-name" className="input-group-text">First name</label>
                    <input id="first-name" type="text" className="form-control"/>
                </div>
                <div className="input-group mb-3">
                    <label htmlFor="last-name" className="input-group-text">Last name</label>
                    <input id="last-name" type="text" className="form-control"/>
                </div>
                <div className="input-group mb-3">
                    <label htmlFor="dofb" className="input-group-text">Date of birth</label>
                    <input id="dofb" type="date" className="form-control"/>
                </div>
                <div className="input-group mb-3">
                    <label htmlFor="number" className="input-group-text">Phone number</label>
                    <input id="number" type="number" className="form-control"/>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </>
        )
    }
}

export default AccountSetting;