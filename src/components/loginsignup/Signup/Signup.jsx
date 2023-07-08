import React from "react";
import Heading from "../../common/Heading";
import './signup.css';

const Signup = ({ setLogin }) => {
    return (
        <>
            <div className="contain">
                <Heading title='Registration' />

                <form action="#">
                    <div className="form first">
                        <div className="details personal">
                            <div className="fields">
                                <div className="input-field">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Enter your name" required />
                                {/* </div>
                                <div className="input-field">
                                    <label>Date Of Birth</label>
                                    <input type="date" placeholder="Enter your D.O.B" required /> */}
                                </div>
                                <div className="input-field">
                                    <label>Email</label>
                                    <input type="text" placeholder="Enter your email" required />
                                </div>
                                <div className="input-field">
                                    <label>Mobile Number</label>
                                    <input type="number" placeholder="Enter your mobile number" required />
                                </div>
                                <div className="input-field">
                                    <label>Password</label>
                                    <input type="password" placeholder="Enter your gender" required />
                                </div>
                                <div className="input-field">
                                    <label>Re-type Password</label>
                                    <input type="password" placeholder="Enter your occupation" required />
                                </div>
                            </div>
                        </div>

                        <div className="details button">
                            <button className="nextBtn">
                                <span style={{ color: "white" }} className="btnText">Register</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signup;