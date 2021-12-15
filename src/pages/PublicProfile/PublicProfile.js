import React, { Component } from 'react'
import {connect} from "react-redux";
import Layout from '../../components/Layout/Layout';
import Spinner from '../../components/Spinner/Spinner';
import Button from '@mui/material/Button';
import './PublicProfile.css';
import Review from '../../components/Review/Review';
import urls from '../../config/url';
import axios from 'axios';
import isLoading from '../../actions/appAction';

class PublicProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            following: false,
            userProfile: {},
            userReviews: []
        }
    }

    componentDidMount() {
        this.fetchUserProfile();
        this.fetchUserReviews();
        this.idUserFollowing();
    }

    idUserFollowing = async () => {
        const { isLoading, user } = this.props;
        const followee = window.location.pathname.split("/").at(2);
        const follower = user.emailAddress;
        let request = urls.isUserFollowing;
        const url = `${request.url}/${follower}/${followee}`
        axios.request(url).then((response) => {
            this.setState({
                following: response.data.following
            })
            isLoading(false);
        }).catch((error) => {
            isLoading(false);
            console.error(error); //todo: handle exception
        });
    }

    fetchUserProfile = async () => {
        const { isLoading } = this.props;
        const user = window.location.pathname.split("/").at(2);
        let request = JSON.parse(JSON.stringify(urls.getProfile));
        request.url = `${request.url}${user}`;
        isLoading(true);
        axios.request(request).then((response) => {
            this.setState({
                userProfile: response.data
            });
            isLoading(false);
        }).catch((error) => {
            isLoading(false);
            console.error(error); //todo: handle exception
        });
    }

    fetchUserReviews = async () => {
        const { isLoading } = this.props;
        const pathParam = window.location.pathname.split('/');
        let request = JSON.parse(JSON.stringify(urls.getUserReviews));
        request.url = `${request.url}${pathParam[2]}`;
        isLoading(true);
        axios.request(request).then((response) => {
            this.setState({
                userReviews: response.data
            });
            isLoading(false);
        }).catch((error) => {
            isLoading(false);
            console.error(error); //todo: handle exception
        });
    }

    renderMainContent() {
        const { userProfile, userReviews } = this.state;
        return (
            userProfile ? (
                <div className="main-container">
                    <div className="user-name">
                        {`${userProfile.firstName} ${userProfile.lastName}`}
                    </div>
                    {
                        userProfile.isPaidMember && (
                            <div className="prime-status">
                                <i className="fas fa-award"></i>
                                &nbsp;&nbsp;Subscribed member
                            </div>
                        )
                    }

                    <div className="review-container">
                        <div className="rc-header">User Reviews</div>
                        <div className="rc-table">
                            <div className="rc-review">
                                {/*{*/}
                                {/*    userReviews && (userReviews.map(review => (*/}

                                {/*    )))*/}
                                {/*}*/}
                                <Review/>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="main-container">
                    <div className="user-name">
                        User Does Not exist!
                    </div>
                </div>
            )
        )
    }

    followUser() {
        const { isLoading, user } = this.props;
        const followee = window.location.pathname.split("/").at(2);
        const follower = user.emailAddress;
        let request = urls.followUser;
        const url = `${request.url}${followee}`
        isLoading(true);
        axios.put(url, {
                follower
        }).then((response) => {
            this.setState({
                following: true
            });
            isLoading(false);
        }).catch((error) => {
            isLoading(false);
            console.error(error); //todo: handle exception
        });
    }

    unfollowUser() {
        //unfollow logic
    }

    renderLeftContent() {
        const { following } = this.state;
        const { user } = this.props;
        const loggedIn = user && Object.keys(user).length > 0
        return(
            <div className="left-pane-container">
                <div className="profile-pic-container">
                    <img className="profile-pic"
                        alt="profile"
                        src="https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg" />
                </div>
                <div className="follow-container">
                    {/* TODO: check if user already follows thie person */}
                    {
                        !following && loggedIn && (
                                       <Button variant="contained" onClick={() => this.followUser()}>+
                                           Follow</Button>
                                   )
                    }
                    {
                        following && loggedIn && (
                            <Button variant="contained" onClick={() => this.unfollowUser()}>Unfollow</Button>
                        )
                    }
                    
                </div>
            </div>
        )
    }

    render() {
        const {loading} = this.props;
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
    loading: state.app.isLoading,
    user: state.user
});
const mapDispatchToProps = dispatch => ({
    isLoading: loading => dispatch(isLoading(loading))
});
export default connect(mapStateToProps, mapDispatchToProps) (PublicProfile);