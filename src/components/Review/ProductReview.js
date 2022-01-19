import React, {useEffect, useState} from "react";
import {Avatar, Snackbar} from '@mui/material';
import {Rating} from 'react-simple-star-rating'
import urls from "../../config/url";

const ProductReview = ({product, email}) => {
    console.log(product, " : ", email);
    let request = urls.getReviews;
    const pathParam = window.location.pathname.split('/');
    let [review, setReview] = useState(
        {productId: pathParam[2], rating: 0, photos: '', avatar: ''});
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const writeReview = () => {
        // console.log(request.url);
        review = {
            ...review,
            productName: product.itemName,
            emailAddress: email
        }
        fetch(`${request.url}${pathParam[2]}`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(() => {
                setOpen(true);
                setShow(false)
            });

        setTimeout(() => {
            setOpen(false)
        }, 3000);
    }
    // console.log(review);

    const handleChangeValue = (key, value) => {
        console.log("Key: ", key);
        setShow(true);
        setReview({
                      ...review,
                      [key]: value
                  })
    }

    return (
        <>
            <div className="row mt-2">
                <div className="d-none d-lg-block col-lg-1">
                    <Avatar alt={review.productId} src={review.avatar}/>
                </div>
                <div className="col-11">
                    <textarea
                        onChange={(event) => handleChangeValue('comment', event.target.value)}
                        className="form-control"
                        value={(!show) ? "" : (review && review.comment)}
                        style={{
                            width: "100%", color: "black",
                            padding: "10px",
                            backgroundColor: "white"
                        }}
                        placeholder="Write comments ..."/>
                </div>
            </div>
            <div className="mt-2">
                <span className="pt-1">
                    Your rating:
                </span>
                <span className="review-heading-1 ps-1">
                    <Rating name="size-small" ratingValue={review.rating} size="20px" max="5"
                            onClick={(value) => handleChangeValue('rating', value / 20)}/>
                </span>
            </div>
            <div className="mt-2">
                <button onClick={writeReview} className="btn btn-primary rounded-pill">
                    Submit
                </button>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={writeReview}
                message="Your comment has been submitted for further review. Please come back to check your comment later."
                action={() => {
                }}
            />
        </>
    );
}

export default ProductReview;