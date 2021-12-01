import React, {Component} from "react";
import './profile.css';
import Selectusstate from 'react-select-us-states';
import PhoneInput from "react-phone-input-2";

class AddressSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.setStateValue = this.setStateValue.bind(this);
        this.setPhoneValue = this.setPhoneValue.bind(this);
    }

    setStateValue(newValue) {
    }

    setPhoneValue(newValue) {
    }

    render() {
        return (
            <>
                <div className="form-group row mb-3">
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
                        <label htmlFor="street-address" className="col-md-12 col-xl-2">Street address</label>
                        <div className="col-10">
                            <input id="street-address" type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="apt" className="col-md-12 col-xl-2">Apt, suite, etc.(optional)</label>
                        <div className="col-10">
                            <input id="apt" type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="city" className="col-md-12 col-xl-2">City</label>
                        <div className="col-10">
                            <input id="city" type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="state" className="col-md-12 col-xl-2">State</label>
                        <div className="col-10">
                            <Selectusstate id="myId" className="myClassName form-control" onChange={this.setStateValue}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="country" className="col-md-12 col-xl-2">Country</label>
                        <div className="col-10">
                            <select id ="country" className="form-control">
                                <option value="US" selected>US</option>
                                <option value="others" disabled>Other Countries</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="zip-code" className="col-md-12 col-xl-2">Zip code</label>
                        <div className="col-10">
                            <input id="zip-code" type="number" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="phone-number" className="col-md-12 col-xl-2">Phone number</label>
                        <div className="col-10">
                            <PhoneInput className="form-control"
                                        country={'us'}
                                        onChange={this.setPhoneValue}/>
                        </div>
                    </div>

            </div>

            <button type="button" className="btn btn-primary ">Cancel</button>
            <button type="button" className="btn btn-primary button-size">Save</button>

            </>
        )
    }
}

export default AddressSetting;