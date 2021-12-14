import { Avatar, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import urls from "../../config/url";
import {useHistory} from "react-router";


const Review = () => {

    const [reviews, setReviews] = useState([]);
    const history = useHistory();
    const pathParam = window.location.pathname.split('/');
    let request = pathParam[1] === "profile" ?
                  JSON.parse(JSON.stringify(urls.getUserReviews)) :
                  JSON.parse(JSON.stringify(urls.getReviews))
    // console.log(request.url);
    console.log(pathParam[1]);

    useEffect(() => {
        fetch(`${request.url}${pathParam[2]}`)
            .then(response => response.json())
            .then(reviews => setReviews(reviews))
    },[]);

    const redirectToPublicProfile = function (email) {
        const redirectionUrl = `/profile/${email}`;
        history.push({
            pathname: redirectionUrl
        });
    }
    return (
        <>
            <ul className="list-group">
                {
                    reviews.map(review => {
                        return(
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                {/*{JSON.stringify(review)}*/}
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt={review.emailAddress} src={review.avatar} onClick={() => redirectToPublicProfile(review.emailAddress)}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <div className="review-heading-container">
                                            <span className="review-heading-1">
                                                {
                                                    pathParam[1] === "details" ? (
                                                        <span>
                                                        Username: {review && review.emailAddress !== '' ? review.emailAddress.split('@')[0] : ''}
                                                        </span>
                                                    ) : (
                                                        <span>
                                                        Product Name: {review && review.productName}
                                                        </span>
                                                    )
                                                }
                                            </span>
                                                <span className="review-heading-1">
                                                <Rating name="size-small" readOnly value={review.rating} size="small" />
                                            </span>
                                                {/*<span className="review-heading-2">*/}
                                                {/*    {heading}*/}
                                                {/*</span>*/}
                                            </div>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {review.comment}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />

                                </ListItem>
                            </List>

                        );
                    })
                }
            </ul>
        </>

    )
}
export default Review;