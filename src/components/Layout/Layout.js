import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Layout.css'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="container-fluid">
                <div className="row nav-bar">
                    <NavBar />
                </div>
                <div className="row root-content">
                    <div className="col-1 side-bar">{this.props.left}</div>
                    <div className="col-10 main-content"> {this.props.main}</div>
                    <div className="col-1 right-side-bar">{this.props.right}</div>
                </div>
            </div>
        )
    }
}
export default Layout;