import React, {Component} from "react";
import './profile.css';

class AddressSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                            <input id="state" type="text" className="form-control"/>
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
                            <input id="phone-number" type="number" className="form-control"/>
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