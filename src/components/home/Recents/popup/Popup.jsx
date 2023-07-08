import React from "react";
import './popup.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Popup = (props) => {
    return (props.trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <AiOutlineCloseCircle className="close-btn" onClick={props.closePopup} size={30} />
                { props.children }
            </div>
        </div>) : ""
    )
};

export default Popup;