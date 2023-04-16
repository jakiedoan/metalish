import './modal-download.scss';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BsXCircle } from "react-icons/bs";
import AlertNotification from "../alert-notification/alert-notification";
import {useTranslation} from "react-i18next";

let timeOut = null;
let timeIn = null;

const ModalDownload = ({show,setShow,setStatusButton}) =>{

    const {t} = useTranslation();

    const  images = {
        pc: process.env.PUBLIC_URL + '/images/modal-download/pc.png',
    }

    const handleDownload = () => {
        if(!alert){
            timeIn= setTimeout(()=>{ setAlert(true)},500);
            timeOut = setTimeout(()=>{
                setAlert(false);
                setStatusButton(true);
            },2800);
        }
        setShow(false);
    }

    const handleClose = () => {
        setShow(false);
        setStatusButton(true);
    }

    const [alert, setAlert] = useState(false);

    const closeAlert = () =>{
        setAlert(false);
        clearTimeout(timeOut);
        clearTimeout(timeIn);
    }
    return(
        <>
            <Modal show={show} onHide={handleClose} className="modal-download">
                <Modal.Body>
                    <span className="modal-title">{t("modalDownload.titleMain")}</span>
                    <div className="modal-download-body">
                        <BsXCircle className="icon-close"
                                   onClick={()=>handleClose()} />

                        <div className="button-download" onClick={handleDownload}>
                            <img className="icon" src="https://metagear.game/img/appstore.webp" alt="app-store" />
                            <span>Coming soon...</span>
                        </div>

                        <div className="button-download" onClick={handleDownload}>
                            <img className="icon" src="https://metagear.game/img/googleplay.webp" alt="google-play" />
                            <span>Coming soon...</span>
                        </div>

                        <div className="button-download" onClick={handleDownload}>
                            <img className="icon" src={images.pc} alt="pc" />
                            <span>Coming soon...</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* <AlertNotification alertStatus={alert} closeAlert={()=>closeAlert()} title={"Download Success"} /> */}
        </>
    )
}

export default ModalDownload;