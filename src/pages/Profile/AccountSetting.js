import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import PhoneInput from "react-phone-input-2";
import urls, {PROFILE_API} from "../../config/url";

const AccountSetting =() => {

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
            {JSON.stringify(newProfile)}
            <h1>Account Information</h1>
            <div className="form-group row mb-3">
                <label htmlFor="email-address" className="col-md-12 col-xl-2">Email Address</label>
                <div className="col-10">
                    <input id="email-address" type="email" className="form-control"
                           value={newProfile.emailAddress}
                           disabled="disabled"
                           />
                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="password" className="col-md-12 col-xl-2">Password</label>
                <div className="col-10">
                    <input id="password" type="password" className="form-control"
                           value={newProfile.password}
                           onChange={(event) => handleChangeValue('password',event.target.value)}
                           />
                </div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={saveClickHandler}>Save</button>
            </div>
            <hr/>
            <h1>Personal Information</h1>
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
                    <input id="last-name" type="text" className="form-control"
                           value={newProfile.lastName}
                           onChange={(event) => handleChangeValue('lastName',event.target.value)}/>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="dofb" className="col-md-12 col-xl-2">Date of birth</label>
                <div className="col-10">
                    <input id="dofb" type="date" className="form-control"
                           value={newProfile.dateOfBirth}
                           onChange={(event) => handleChangeValue('dateOfBirth',event.target.value)}/>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="number" className="col-md-12 col-xl-2">Phone number</label>
                <div className="col-10">
                    <PhoneInput
                        className = "form-control"
                        onlyCountries={['us']}
                        value = {String(newProfile.phone)}
                        onChange={(value) => handleChangeValue('phone',value)}/>
                </div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={saveClickHandler}>Save</button>
            </div>
        </>
    )
}

export default AccountSetting;