import React, {useState} from "react";
import urls, {REVIEW_API} from "../../config/url";

const ProductReview = () => {
    const [review, setReview] = useState({});

    let request = urls.getReviews;

    const writeReview = () => {
        console.log(request.url);
        fetch(`${request.url}${'B08Y727NMK'}`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(review => setReview(review));
    }

    const handleChangeValue = (key,value)=> {
        setReview({
            ...review,
            [key]: value
        })
    }

    return(
        <>
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={''}
                             style={{margin: '16px'}} alt=""/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea
                                  onChange={(event) => handleChangeValue('comment',event.target.value)}
                                  className="form-control"
                                  style={{
                                      width: "100%", color: "black",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      paddingBottom: "15px",
                                      backgroundColor: "white"
                                  }}
                                  placeholder="Write comments ..."/>
                        {/*<span>*/}
                        {/*    <button type={submit}><i className="far fa-image me-3"/></button>*/}
                        {/*</span>*/}
                        <button onClick={writeReview} className="btn btn-primary fa-pull-right rounded-pill">
                            Submit
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default ProductReview;