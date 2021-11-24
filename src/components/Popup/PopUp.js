import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Privacypolicy from "../../pages/Privacy policy/Privacypolicy";

const PopUp = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} size={"lg"}>
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
            </Modal>
        </>
    );
}

export default PopUp;