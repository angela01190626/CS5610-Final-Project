import React, {Component, useEffect, useState} from "react";
import {PROFILE_API} from "../../config/url";

const SubscriptionSettings =() => {

    const [newProfile, setNewProfile] = useState({});

    useEffect(() =>
        fetch(`${PROFILE_API}${'alice@gmail.com'}`)
            .then(response => response.json())
            .then(newProfile => {
                setNewProfile(newProfile);
            },),[]);

    const saveClickHandler = () => {
        fetch(`${PROFILE_API}${newProfile.emailAddress}`, {
            method: 'PUT',
            body: JSON.stringify(newProfile),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((profile) => {
                // setNewProfile(profile)
                console.log(profile)
            });
    };

    const handleChangeValue = (key,value)=> {
        setNewProfile({
            ...newProfile,
            [key]: value
        })
    }

        return (
            <>
                <h2>Subscription</h2>
                <div className="form-group row mb-1">
                    <h6>We offer free delivery fees for paid members. Check the box if you want to be our paid members.</h6>
                    <div className="form-group row mb-3 mt-2">
                        <label>
                            <input type="checkbox" name = "subscribe" checked={newProfile.isPaidMember ='' ? false : newProfile.isPaidMember }
                                onChange={(event) => handleChangeValue('isPaidMember',event.target.checked)}/> Paid Member
                        </label>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={saveClickHandler}>Save</button>

            </>
        )
}

export default SubscriptionSettings;