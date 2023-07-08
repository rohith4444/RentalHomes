import React, { useState } from "react";
import './header.css';
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";
import logo from "../../images/5.png";

const Header = () => {
    const [navList, setnavList] = useState(false);
    return (
        <>
            <header>
                <div className="container flex">
                    <div className="logo">
                    <img className="Logoimg" src={logo} alt="" />
                        <h2>Rental Homes</h2>
                    </div>
                    <div className="nav">
                        <ul className={navList ? "small" : "flex"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                            {
                                navList ? 
                                    <>
                                        <li key={5}>
                                            <span>2</span><Link to={"/compare"}>My List</Link>
                                        </li>
                                        <Link to={"/login"}>
                                            <i className="fa fa-sign-out"></i> Sign In
                                        </Link>
                                    </>
                                : ""
                            }
                        </ul>
                    </div>
                    <div className="button flex">
                        <h4>
                            <span>2</span><Link to={"/compare"}>My List</Link>
                        </h4>
                        <Link to={"/login"}>
                            <button className="btn1">
                                <i className="fa fa-sign-out"></i> Sign In
                            </button>
                        </Link>
                    </div>
                    <div className="toggle">
                        <button onClick={() => setnavList(!navList)}>
                            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;