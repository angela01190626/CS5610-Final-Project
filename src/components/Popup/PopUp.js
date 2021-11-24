import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Privacypolicy from "../../pages/Privacy policy/Privacypolicy";

const PopUp = () => {

    const ppAccepted = localStorage.getItem("privacyPolicyAccepted");

    const [show, setShow] = useState(!ppAccepted);

    const handleClose = () => setShow(false);

    const acceptPrivacyPolicy = () => {
        setShow(false);
        localStorage.setItem("privacyPolicyAccepted", true);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} size={"lg"} centered scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="ps-2">
                            Privacy policy
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Privacypolicy/>
                </Modal.Body>
                <Modal.Footer>
                   <button onClick={acceptPrivacyPolicy}>Accept</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopUp;