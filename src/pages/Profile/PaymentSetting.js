import React, {Component} from "react";

class PaymentSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <h2>Payment Setting</h2>
                <div className="form-group row mb-3">
                    <input id="first-name" type="text" className="form-control me-2 mb-2" style={{width: "49%"}} placeholder="First name"/>
                    <input id="last-name" type="text" className="form-control mb-2 " style={{width: "49%"}} placeholder="Last name"/>

                    <input id="card-number" type="text" className="form-control mb-2" placeholder="Card number"/>

                    <input id="month" type="text" className="form-control me-2" style={{width: "30%"}} placeholder="MM"/>
                    <input id="year" type="text" className="form-control me-2" style={{width: "30%"}} placeholder="YYYY"/>
                    <input id="cvv" type="password" className="form-control" style={{width: "30%"}} placeholder="CVV"/>

                    <input id="phone-number" type="text" className="form-control mt-2" style={{width: "50%"}} placeholder="Phone number"/>
                </div>
                <button type="button" className="btn btn-primary">Save</button>

            </>
        )
    }
}

export default PaymentSetting;