import React, {Component, useEffect, useState} from "react";
import {PROFILE_API} from "../../config/url";

const SubscriptionSettings =({user}) => {

    let [newProfile, setNewProfile] = useState({});
    console.log(newProfile)
    useEffect(() =>
        fetch(`${PROFILE_API}${user.emailAddress}`)
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
            .then((response) => {
                if(!response.ok) throw new Error(response.status);
                else {
                    alert("Saved successfully")
                    return response.json();
                }
            })
            .then((profile) => {
                console.log(profile)
            })
            .catch(function(error) {
                alert('Please save it again!')
                console.log('Save failed', error.message);
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
                    <h6>We offer free delivery fees for subscribed members. Check the box if you want to be our subscribed members.</h6>
                    <div className="form-group row mb-3 mt-2">
                        <label>
                            <input type="checkbox" name = "subscribe" checked={(newProfile && newProfile.isPaidMember) === false
                                ? false : (newProfile && newProfile.isPaidMember) }
                                onChange={(event) => handleChangeValue('isPaidMember',event.target.checked)}/> Subscribed Member
                        </label>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={saveClickHandler}>Subscribe</button>

            </>
        )
}

export default SubscriptionSettings;