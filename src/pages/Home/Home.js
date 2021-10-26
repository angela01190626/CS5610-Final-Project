import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderMainContent() {
        return(
            <div>
                Hello, This is the home page.
                <Button text={"Button 1"} onClick={e => this.buttonCLickHandler1(e)} />
                <Button text={"Button 2"} onClick={e => this.buttonCLickHandler2(e)} />
            </div>
        )
    }

    renderLeftContent() {
        return(
            <div>
                Left side.
            </div>
        )
    }

    renderRightContent() {
        return(
            <div>
                Right Side.
            </div>
        )
    }

    buttonCLickHandler1(e) {
        alert("Button 1 Clicked!");
    }

    buttonCLickHandler2(e) {
        alert("Button 2 Clicked!");
    }

    render() {
        return(
            <div>
                <Layout
                    left={this.renderLeftContent()} 
                    main={this.renderMainContent()}
                    right={this.renderRightContent()}
                />
            </div>
        )
    }
}
export default Home;