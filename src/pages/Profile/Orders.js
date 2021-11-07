import React, { Component } from "react";
import Navigation from "./Navigation";
import NavBar from "../../components/NavBar/NavBar";

class Orders extends Component {
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
                        <h1>My Orders</h1>
                    </div>
                </div>
            </>
        )
    }
}

export default Orders;