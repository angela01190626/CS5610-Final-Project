import { Avatar, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = ({
    productId,
    userImg,
    rating,
    productName,
    userName,
    profilePic,
    heading,
    reviewText
}) => {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={userName} src={profilePic} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <div className="review-heading-container">
                            <span className="review-heading-1">
                                {`Product: ${productName}`}
                            </span>
                            <span className="review-heading-1">
                                <Rating name="size-small" readOnly value={rating} size="small" />
                            </span>
                            <span className="review-heading-2">
                                {heading}
                            </span>
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
                                {reviewText}
                            </Typography>
                            {
                                (!!userImg && userImg.length > 0) && (
                                    <ImageList sx={{ width: 500, height: 120 }} cols={3} rowHeight={110}>
                                        {userImg.map((item, idx) => (
                                            <ImageListItem key={item}>
                                                <img
                                                    src={item}
                                                    alt={`reviewImg${idx}`}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                )
                            }
                        </React.Fragment>
                    }
                />
                
            </ListItem>
        </List>
    )
}
export default Review;