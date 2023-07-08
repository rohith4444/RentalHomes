import React, { useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Loginsignup = ({ loginState }) => {
    const [login, setLogin] = useState(true);
    if (login) {
        return (
            <Login setLogin={() => setLogin(!login)} />
        );
    } else {
        return (
            <Signup setLogin={() => setLogin(!login)} />
        );
    }
}

export default Loginsignup;