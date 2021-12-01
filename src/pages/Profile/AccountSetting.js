import React, {Component} from "react";
import PhoneInput from "react-phone-input-2";

class AccountSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setNewValue = this.setNewValue.bind(this);
    }

    setNewValue(newValue) {
    }

    render() {
        return (
            <>
                <h1>Account Information</h1>
                <div className="form-group row mb-3">
                    <label htmlFor="email-address" className="col-md-12 col-xl-2">Email Address</label>
                    <div className="col-10">
                        <input id="email-address" type="email" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="password" className="col-md-12 col-xl-2">Password</label>
                    <div className="col-10">
                        <input id="password" type="password" className="form-control"/>
                    </div>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
                <hr/>
                <h1>Personal Information</h1>
                <div className="form-group row mb-3">
                    <label htmlFor="first-name" className="col-md-12 col-xl-2">First name</label>
                    <div className="col-10">
                        <input id="first-name" type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="last-name" className="col-md-12 col-xl-2">Last name</label>
                    <div className="col-10">
                        <input id="last-name" type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="dofb" className="col-md-12 col-xl-2">Date of birth</label>
                    <div className="col-10">
                        <input id="dofb" type="date" className="form-control"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="number" className="col-md-12 col-xl-2">Phone number</label>
                    <div className="col-10">
                        <PhoneInput className="form-control"
                                    country={'us'}
                                    onChange={this.setNewValue}/>
                    </div>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </>
        )
    }
}

export default AccountSetting;