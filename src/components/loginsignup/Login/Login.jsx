import React from "react";
import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa"
import './login.css';

const Login = ({ setLogin }) => {
    const [popupStyle, showPopup] = useState("hide");

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="page">
            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <div className="login-btn" onClick={popup}>Login</div>
                <div className="forgotpassword">
                    <p>New user <a onClick={setLogin}>register</a> here</p>
                    <p><a>Forgot Password</a></p>
                </div>
                <p>or login with</p>
                <div className="alt-login">
                    <button style={{ width: 150, padding: 0 }} className="btn1">
                        <FaFacebookF size={30} />
                    </button>
                    <button style={{ width: 150, padding: 0 }} className="btn1">
                        <FaGoogle size={30} />
                    </button>
                </div>
                <div className={popupStyle}>
                    <h3>Login Failed</h3>
                    <p>Username or Password Incorrect</p>
                </div>
            </div>
        </div>
    );
}

export default Login;