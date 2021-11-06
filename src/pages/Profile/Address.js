import React, { Component } from "react";
import Navigation from "./Navigation";
import NavBar from "../../components/NavBar/NavBar";
import AddressSetting from "./AddressSetting";

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className ="container-fluid m-2 row">
                    <div>
                        <NavBar/>
                    </div>
                    <div className="col-3">
                        <Navigation/>
                    </div>
                    <div className="col-8">
                        <h1>Delivery Address</h1>
                        <AddressSetting/>
                    </div>
                </div>
            </>
        )
    }
}

export default Address;