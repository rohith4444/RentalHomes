import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Addproperty = () => {
    var em = ["lock", "asdfasd", "adfweaasdf asdf", "asfwaeasdf", "asdfa", "asdfasfw", "asdfsx"];

    return (
        <>
            <div className="add_property_container">
                <div className="details">
                    <h3>Details</h3>
                    <div className="uploadPhotos">
                        Upload Photos
                    </div>
                    <div className="entry">
                        <label>Name</label>
                        <input type="text" name="user_name" className="input" />
                    </div>
                    <div className="entry1">
                        <div className="subentry">
                            <label>No.of Bedrooms</label>
                            <select name="bedrooms" id="bedrooms" className="input transparent">
                                {Array.from(Array(11).keys()).map((item, index) => {
                                    return (<option value={item} id={index}>{item}</option>);
                                })}
                            </select>
                        </div>
                        <div className="subentry">
                            <label>No.of Bathrooms</label>
                            <select name="bathrooms" id="bathrooms" className="input transparent">
                                {Array.from(Array(11).keys()).map((item, index) => {
                                    return (<option value={item} id={index}>{item}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="eminities">
                    <h3>Eminities</h3>
                    <div className="entry">
                        <label>Describe your house</label>
                        <textarea name="message" className="input textarea" />
                    </div>
                    <div className="entry">
                        <label>Add Eminities</label>
                        <input type="text" name="house_eminity" className="input" />
                        <div className="btn_eminities">
                            {em.map((list, index) => (
                                <button className="eminity_button">
                                    {list}
                                    <AiOutlineCloseCircle className="close-btn" size={10} />
                                </button>
                            ))} 
                        </div>
                    </div>
                    <div className="entry">
                        <label>Email</label>
                        <input type="text" name="user_email" className="input" />
                    </div>
                    <div className="entry">
                        <label>Phone</label>
                        <input type="text" name="user_phone" className="input" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addproperty;