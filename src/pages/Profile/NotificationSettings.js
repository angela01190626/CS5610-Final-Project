import React, {Component} from "react";

class NotificationSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <h2>Phone Number</h2>
                <div className="form-group row mb-1">
                    <h6>We use your number to call you about your order. You can set your contact preferences below.</h6>
                    <div className="form-group row mb-3 mt-2">
                        <label htmlFor="phone-number" className="col-md-12 col-xl-2">Phone number</label>
                        <div className="col-10">
                            <input id="phone-number" type="number" className="form-control"/>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary">Save</button>

            </>
        )
    }
}

export default NotificationSettings;