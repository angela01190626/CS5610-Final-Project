import React, {useState, useEffect} from "react";
import PhoneInput from "react-phone-input-2";
import {PROFILE_API} from "../../config/url";
import {Snackbar} from "@mui/material";

const AccountSetting =({user}) => {

    let [newProfile, setNewProfile] = useState({});
    let [passwordChanged, setPasswordChanged] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() =>
        fetch(`${PROFILE_API}${user.emailAddress}`)
            .then(response => response.json())
            .then(newProfile => {
                setNewProfile(newProfile);
            },),[]);

    const saveClickHandler = () => {
        let payloadObj = JSON.parse(JSON.stringify(newProfile));
        if(!passwordChanged) {
            delete payloadObj.password;
        }
        fetch(`${PROFILE_API}${payloadObj.emailAddress}`, {
            method: 'PUT',
            body: JSON.stringify(payloadObj),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                if(!response.ok) throw new Error(response.status);
                else {
                    setPasswordChanged(false);
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
        if(key === "password") {
            setPasswordChanged(true);
        }
        setNewProfile({
            ...newProfile,
            [key]: value
        })
    }

    return (
        <>
            {/*{JSON.stringify(newProfile)}*/}
            <h1>Account Information</h1>
            <div className="form-group row mb-3">
                <label htmlFor="email-address" className="col-md-12 col-xl-2">Email Address</label>
                <div className="col-10">
                    <input id="email-address" type="email" className="form-control"
                           value={newProfile && newProfile.emailAddress}
                           disabled="disabled"
                           />
                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="password" className="col-md-12 col-xl-2">Password</label>
                <div className="col-10">
                    <input id="password" type="password" className="form-control"
                           value={newProfile && newProfile.password}
                           onChange={(event) => handleChangeValue('password',event.target.value)}
                           />
                </div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={saveClickHandler}>Save</button>
            </div>
            <hr/>
            <h1>Personal Information</h1>
            <div className={"account-settings-form-root"}>
                <div className="form-group row mb-3">
                    <label htmlFor="first-name" className="col-md-12 col-xl-2">First name</label>
                    <div className="col-10">
                        <input id="first-name" type="text" className="form-control"
                               value={newProfile && newProfile.firstName}
                               onChange={(event) => handleChangeValue('firstName',event.target.value)}/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="last-name" className="col-md-12 col-xl-2">Last name</label>
                    <div className="col-10">
                        <input id="last-name" type="text" className="form-control"
                               value={newProfile && newProfile.lastName}
                               onChange={(event) => handleChangeValue('lastName',event.target.value)}/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="dofb" className="col-md-12 col-xl-2">Date of birth</label>
                    <div className="col-10">
                        <input id="dofb" type="date" className="form-control"
                               value={newProfile && newProfile.dateOfBirth}
                               onChange={(event) => handleChangeValue('dateOfBirth',event.target.value)}/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="number" className="col-md-12 col-xl-2">Phone number</label>
                    <div className="col-10">
                        <PhoneInput
                            className = "phone-input-style"
                            onlyCountries={['us']}
                            value = {String(newProfile && newProfile.phone)}
                            onChange={(value) => handleChangeValue('phone',value)}/>
                    </div>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={saveClickHandler}>Save</button>
                </div>
            </div>
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

export default AccountSetting;
