import { Avatar, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import urls from "../../config/url";
import productReview from "./ProductReview";
import axios from "axios";
import ProductReview from "./ProductReview";


const Review = () => {

    const [reviews, setReviews] = useState([]);
    let request = urls.getReviews;
    const pathParam = window.location.pathname.split('/');
    // console.log(request.url);
    // console.log(pathParam[2]);

    useEffect(() => {
        fetch(`${request.url}${pathParam[2]}`)
            .then(response => response.json())
            .then(reviews => setReviews(reviews))
    },[]);


    return (
        <>
            <ProductReview/>
            <ul className="list-group">
            {
                reviews.map(review => {
                    return(
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {/*{JSON.stringify(review)}*/}
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={review.emailAddress} src={review.avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <div className="review-heading-container">
                                            <span className="review-heading-1">
                                                {`Product: ${review.productName}`}
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
                                            <br/>
                                            {
                                                (review.photos !=='') ? (
                                                    <img
                                                        width="200px"
                                                        height="200px"
                                                        src={review.photos}
                                                        alt={review.productName}
                                                        loading="lazy"
                                                    />
                                                ) : <></>
                                            }

                                            {/*{*/}
                                            {/*    (!!review.photos && review.photos.length > 0) && (*/}
                                            {/*        <ImageList sx={{ width: 500, height: 120 }} cols={3} rowHeight={110}>*/}
                                            {/*            {review.photos.map((item, idx) => (*/}
                                            {/*                <ImageListItem key={item}>*/}
                                            {/*                    <img*/}
                                            {/*                        src={item}*/}
                                            {/*                        alt={`review.photos${idx}`}*/}
                                            {/*                        loading="lazy"*/}
                                            {/*                    />*/}
                                            {/*                </ImageListItem>*/}
                                            {/*            ))}*/}
                                            {/*        </ImageList>*/}
                                            {/*    )*/}
                                            {/*}*/}
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