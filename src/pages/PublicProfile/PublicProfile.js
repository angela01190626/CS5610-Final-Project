import React, { Component } from 'react'
import {connect} from "react-redux";
import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/Spinner/Spinner';
import Button from '@mui/material/Button';
import './PublicProfile.css';
import Review from '../../components/Review/Review';

class PublicProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderMainContent() {
        return (
            <div className="main-container">
                <div className="user-name">
                    Dhruv Dhar
                </div>

                <div className="prime-status">
                    <i class="fas fa-award"></i>
                    &nbsp;&nbsp;Prime member
                </div>

                <div className="review-container">
                    <div className="rc-header">User Reviews</div>
                    <div className="rc-table">
                        <div className="rc-review">
                            <Review 
                                productName={"Amazon Firestick"}
                                userName = {"Dhruv Dhar"} 
                                profilePic = {"https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"}
                                heading={"2nd take it worked"}
                                reviewText={"Tried repeatedly to get to work, spent several hours on phone trying to chat with over burdened “customer support” to no avail. Would work for a short time and then screen would go blank and when it was working, no sound. Customer Support was one of the most frustrating chat support services I have ever encountered."}
                                rating={3.6}
                                userImg={[
                                    "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
                                    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
                                ]}
                            />
                            <Review 
                                productName={"Electric Skateboard"}
                                userName = {"Max V"} 
                                profilePic = {""}
                                heading={"2nd take it worked"}
                                reviewText={"Tried repeatedly to get to work, spent several hours on phone trying to chat with over burdened “customer support” to no avail. Would work for a short time and then screen would go blank and when it was working, no sound. Customer Support was one of the most frustrating chat support services I have ever encountered."}
                                rating={4.2}
                            />
                        </div>  
                    </div>
                </div>
            </div>
        )
    }

    renderLeftContent() {
        return(
            <div className="left-pane-container">
                <div className="profile-pic-container">
                    <img className="profile-pic"
                        alt="profile"
                        src="https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg" />
                </div>
                <div className="follow-container">
                    <Button variant="contained">+ Follow</Button>
                </div>
            </div>
        )
    }

    render() {
        const {loading} = this.props;
        console.log("LLL : ", loading);
        return(
            loading ? (
                <Spinner />
            ) : 
            (
                <div className="container-fluid">
                    <Layout
                        left={this.renderLeftContent()} 
                        main={this.renderMainContent()}
                        right={() => {}}
                    />
                </div>
            )
        )
    }
}
const mapStateToProps = state => ({
    loading: state.app.isLoading
});
export default connect(mapStateToProps, null) (PublicProfile);