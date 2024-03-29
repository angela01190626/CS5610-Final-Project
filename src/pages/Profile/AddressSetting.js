import React, {Component, useEffect, useState} from "react";
import './profile.css';
import PhoneInput from "react-phone-input-2";
import urls, {PROFILE_API} from "../../config/url";
import {Snackbar} from "@mui/material";


const AddressSetting =({user}) => {

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
        setNewProfile({
            ...newProfile,
            [key]: value
        })
    }

    const states =[
        {value:'Alabama', label:'AL'}, {value:'Alaska', label:'AK'}, {value:'Arizona', label:'AZ'}, {value:'Arkansas', label:'AR'},
        {value:'California', label:'CA'}, {value:'Colorado', label:'CO'}, {value:'Connecticut', label:'CT'}, {value:'Delaware', label:'DE'},
        {value:'Florida', label:'FL'}, {value:'Georgia', label:'GA'}, {value:'Hawaii', label:'HI'}, {value:'Idaho', label:'ID'},
        {value:'Illinois', label:'IL'}, {value:'Indiana', label:'IN'}, {value:'Iowa', label:'IA'}, {value:'Kansas', label:'KS'},
        {value:'Kentucky', label:'KY'}, {value:'Louisiana', label:'LA'}, {value:'Maine', label:'ME'}, {value:'Maryland', label:'MD'},
        {value:'Massachusetts', label:'MA'}, {value:'Michigan', label:'MI'}, {value:'Minnesota', label:'MN'}, {value:'Mississippi', label:'MS'},
        {value:'Missouri', label:'MO'}, {value:'Montana', label:'MT'}, {value:'Nebraska', label:'NE'}, {value:'Nevada', label:'NV'},
        {value:'New Hampshire', label:'NH'}, {value:'New Jersey', label:'NJ'}, {value:'New Mexico', label:'NM'}, {value:'New York', label:'NY'},
        {value:'North Carolina', label:'NC'}, {value:'North Dakota', label:'ND'}, {value:'Ohio', label:'OH'}, {value:'Oklahoma', label:'OK'},
        {value:'Oregon', label:'OR'}, {value:'Pennsylvania', label:'PA'}, {value:'Rhode Island', label:'RI'}, {value:'South Carolina', label:'SC'},
        {value:'South Dakota', label:'SD'}, {value:'Tennessee', label:'TN'}, {value:'Texas', label:'TX'}, {value:'Utah', label:'UT'},
        {value:'Vermont', label:'VT'}, {value:'Virginia', label:'VI'}, {value:'Washington', label:'WA'}, {value:'West Virginia', label:'WV'},
        {value:'Wisconsin', label:'WI'}, {value:'Wyoming', label:'WY'}]

        return (
            <>
                <div className="form-group row mb-3">
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
                        <label htmlFor="street-address" className="col-md-12 col-xl-2">Street address</label>
                        <div className="col-10">
                            <input id="street-address" type="text" className="form-control"
                                   value={newProfile && newProfile.deliveryAddress1}
                                   onChange={(event) => handleChangeValue('deliveryAddress1',event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="apt" className="col-md-12 col-xl-2">Apt, suite, etc.(optional)</label>
                        <div className="col-10">
                            <input id="apt" type="text" className="form-control"
                                   value={newProfile && newProfile.deliveryAddress2}
                                   onChange={(event) => handleChangeValue('deliveryAddress2',event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="city" className="col-md-12 col-xl-2">City</label>
                        <div className="col-10">
                            <input id="city" type="text" className="form-control"
                                   value={newProfile && newProfile.city}
                                   onChange={(event) => handleChangeValue('city',event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="state" className="col-md-12 col-xl-2">State</label>
                        <div className="col-10">
                            <select className="form-control" value={newProfile && newProfile.state} onChange={(e)=>handleChangeValue('state',e.target.value)}>
                                {
                                    states.map(item=><option value={item.value}>{item.label}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="country" className="col-md-12 col-xl-2">Country</label>
                        <div className="col-10">
                            <select id ="country" className="form-control">
                                <option value="US" selected>US</option>
                                <option value="others" disabled>Other Countries</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="zip-code" className="col-md-12 col-xl-2">Zip code</label>
                        <div className="col-10">
                            <input id="zip-code" type="text" className="form-control"
                                   minLength="5" maxLength="5"
                                   value={newProfile && newProfile.zipcode}
                                   onChange={(event) => handleChangeValue('zipcode',event.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row mb-3">
                        <label htmlFor="phone-number" className="col-md-12 col-xl-2">Phone number</label>
                        <div className="col-10">
                            <PhoneInput
                                className = "form-control"
                                onlyCountries={['us']}
                                value = {newProfile && String(newProfile.phone)}
                                onChange={(value) => handleChangeValue('phone',value)}/>
                        </div>
                    </div>

            </div>

            {/*<button type="button" className="btn btn-primary">Cancel</button>*/}
            <button type="button" className="btn btn-primary button-size" onClick={saveClickHandler}>Save</button>
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


export default AddressSetting;