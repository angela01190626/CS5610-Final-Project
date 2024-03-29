import React, {Component, useEffect, useState} from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import urls, {PROFILE_API} from "../../config/url";
import {Snackbar} from "@mui/material";

const PaymentSetting =({user}) => {

    let [newProfile, setNewProfile] = useState({});
    const [open, setOpen] = useState(false);
    useEffect(() =>
        fetch(`${PROFILE_API}${user.emailAddress}`)
            .then(response => response.json())
            .then(newProfile => {
                setNewProfile(newProfile);
            },),[]);

    const saveClickHandler = () => {
        let payloadObject = JSON.parse(JSON.stringify(newProfile));
        delete payloadObject.password;
        fetch(`${PROFILE_API}${payloadObject.emailAddress}`, {
            method: 'PUT',
            body: JSON.stringify(payloadObject),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                if(!response.ok) throw new Error(response.status);
                else {
                    // alert("Saved successfully")
                    return response.json();
                }
            })
            .then((profile) => {
                console.log(profile)
            })
            .then(setOpen(true))
            .catch(function(error) {
                // alert('Please save it again!')
                console.log('Save failed', error.message);
            });
        setTimeout(() => {
            setOpen(false)
        }, 3000);

    };

    const handleChangeValue = (key,value)=> {

        console.log(value)
        setNewProfile({
            ...newProfile,
            [key]: value
        })
    }
        return (
            <>
                <h2>Payment Setting</h2>
                <div className="form-group row mb-3">
                    <div className="form-group row mb-3">
                        <label htmlFor="first-name" className="col-md-12 col-xl-2">First name</label>
                        <div className="col-10">
                            <input id="first-name" type="text" className="form-control"
                                   value={newProfile.firstName}
                                   onChange={(event) => handleChangeValue('firstName',event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="last-name" className="col-md-12 col-xl-2">Last name</label>
                        <div className="col-10">
                            <input id="last-name" type="text" className="form-control" value={newProfile.lastName}
                                   onChange={(event) => handleChangeValue('lastName',event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="card-number" className="col-md-12 col-xl-2">Card number</label>
                        <div className="col-10">
                            <input id="card-number" type="text" className="form-control" maxLength="16" minLength="16"
                                   value={newProfile.cardNumber}
                                   onChange={(event) => handleChangeValue('cardNumber',event.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <label htmlFor="month" className="col-md-12 col-xl-2">MM</label>
                        <div className="col-10">
                            <input id="month" type="text" className="form-control" value={newProfile.mm}
                                   maxLength="2"
                                   minLength="2"
                                   pattern="[0-9]{2}"
                                   onChange={(event) => handleChangeValue('mm',event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="year" className="col-md-12 col-xl-2">YYYY</label>
                        <div className="col-10">
                                <input id="year" type="text" className="form-control" value={newProfile.yyyy}
                                   maxLength="4" minLength="4"
                                   onChange={(event) => handleChangeValue('yyyy',event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="cvv" className="col-md-12 col-xl-2">CVV</label>
                        <div className="col-10">
                            <input id="cvv" type="password" className="form-control" value={newProfile.cvv}
                                   maxLength="3"
                                   minLength="3"
                                   onChange={(event) => handleChangeValue('cvv',event.target.value)}/>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={saveClickHandler}>Save</button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={saveClickHandler}
                    message="Save Successful!"
                    action={() => {
                    }}
                />
            </>
        )
}

export default PaymentSetting;