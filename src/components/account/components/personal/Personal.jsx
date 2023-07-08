import React from "react";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import LabelInputSide from "../../../common/LabelInputSide";
import { colors } from "../../../data/Data";

const Personal = () => {
    const [personalDetailsEdit, setPersonalDetailsEdit] = useState(false);
    return(
        <div className="personal-container">
            <div className="personal">
                <h2>Personal Details</h2>
            </div>
            <div className="personal">
                <div className="profilePicture">
                    Profile Picture
                </div>
                <div className="profileDetails">
                    <div className="editClose">
                        {personalDetailsEdit ? 
                            <AiOutlineCloseCircle color={colors.primaryColor} onClick={() => {setPersonalDetailsEdit(false)}} size={20} /> :
                            <FaUserEdit color={colors.primaryColor} onClick={() => {setPersonalDetailsEdit(true)}} size={20} />
                        }
                    </div>
                    <LabelInputSide name={'Name'} edit={personalDetailsEdit} value={"Sandeep Varma"} />
                    <LabelInputSide name={'Email'} edit={personalDetailsEdit} value={"sandeepvarma531@gmail.com"} />
                    <LabelInputSide name={'Phone'} edit={personalDetailsEdit} value={"9876543210"} />
                    <LabelInputSide name={'Address'} edit={personalDetailsEdit} value={"123/5-302 Rama street Gollapudi India"} />
                </div>
            </div>
            <div className="personal">
                <div className="profileDetails">
                    <label>Name</label>
                    <input type="text" name="user_name" className="input" />
                    <label>Email</label>
                    <input type="text" name="user_email" className="input" />
                    <label>Phone</label>
                    <input type="text" name="user_phone" className="input" />
                    <label>Address</label>
                    <input type="text" name="user_address" className="input" />
                </div>
                <div className="profileDetails">
                    <label>Name</label>
                    <input type="text" name="user_name" className="input" />
                    <label>Email</label>
                    <input type="text" name="user_email" className="input" />
                    <label>Phone</label>
                    <input type="text" name="user_phone" className="input" />
                    <label>Address</label>
                    <input type="text" name="user_address" className="input" />
                </div>
            </div>
        </div>
    );
};

export default Personal;