import React, { Component } from "react";
import Navigation from "./Navigation";

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
                        Leave room for top nav-bar
                    </div>
                    <div className="col-3">
                        <Navigation/>
                    </div>
                    <div className="col-8">
                        <h2>My Orders</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default Orders;