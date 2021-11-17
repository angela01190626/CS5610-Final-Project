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
                <div className="form-group row mb-3">
                    <h6>We use your number to call you about your order. You can set your contact preferences below.</h6>
                    <input id="phone-number" type="number" className="form-control mt-2 ms-2" style={{width: "50%"}} placeholder="Phone Number"/>
                </div>
                <button type="button" className="btn btn-primary">Save</button>

            </>
        )
    }
}

export default NotificationSettings;