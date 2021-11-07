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
                    <input id="first-name" type="text" className="form-control mb-2" placeholder="First name"/>
                    <input id="last-name" type="text" className="form-control mb-2" placeholder="Last name"/>
                    <input id="street-address" type="text" className="form-control mb-2" placeholder="Street address"/>
                    <input id="street-address" type="text" className="form-control mb-2" placeholder="Apt, suite, etc.(optional)"/>
                    <input id="city" type="text" className="form-control mb-2" placeholder="City"/>

                    <input id="state" type="text" className="form-control me-2" style={{width: "49%"}} placeholder="State"/>

                    <input id="zip-code" type="text" className="form-control" style={{width: "49%"}} placeholder="Zip code"/>

                    <input id="phone-number" type="text" className="form-control mt-2 mb-2" placeholder="Phone number"/>

            </div>

                <button type="button" className="btn btn-primary ">Cancel</button>

                <button type="button" className="btn btn-primary button-size">Save</button>

            </>
        )
    }
}

export default AddressSetting;