import React, { Component } from 'react';
import Footer from '../Footer/Footer';
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
                    <div className="col-2 side-bar">{this.props.left}</div>
                    <div className="col-8 main-content p-3"> {this.props.main}</div>
                    <div className="col-2 right-side-bar">{this.props.right}</div>
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Layout;