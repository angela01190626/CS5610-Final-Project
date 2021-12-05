import React, {Component, useState} from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

class PaymentSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.setNewValue = this.setNewValue.bind(this);
    }

    setNewValue(newValue) {
    }

    render() {
        const {profile} = this.props.profile;
        return (
            <>
                <h2>Payment Setting</h2>
                <div className="form-group row mb-3">
                    <div className="form-group row mb-3">
                        <label htmlFor="first-name" className="col-md-12 col-xl-2">First name</label>
                        <div className="col-10">
                            <input id="first-name" type="text" className="form-control" value={profile.firstName}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="last-name" className="col-md-12 col-xl-2">Last name</label>
                        <div className="col-10">
                            <input id="last-name" type="text" className="form-control" value={profile.lastName}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="card-number" className="col-md-12 col-xl-2">Card number</label>
                        <div className="col-10">
                            <input id="card-number" type="number" className="form-control" value={profile.cardNumber}/>
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <label htmlFor="month" className="col-md-12 col-xl-2">MM</label>
                        <div className="col-10">
                            <input id="month" type="number" className="form-control" value={profile.mm}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="year" className="col-md-12 col-xl-2">YYYY</label>
                        <div className="col-10">
                            <input id="year" type="number" className="form-control" value={profile.yyyy}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="cvv" className="col-md-12 col-xl-2">CVV</label>
                        <div className="col-10">
                            <input id="cvv" type="password" className="form-control" value={profile.cvv}/>
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <label htmlFor="phone-number" className="col-md-12 col-xl-2">Phone number</label>
                        <div className="col-10">
                            <PhoneInput className="form-control"
                                country={'us'}
                                onChange={this.setNewValue}/>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary">Save</button>

            </>
        )
    }
}

export default PaymentSetting;