import React from "react";
import "./Bottom.css";
import { RiFacebookBoxFill, RiTwitterFill, RiLinkedinBoxFill, RiInstagramLine } from "react-icons/ri";
import play3 from "../../images/play3.webp";
import play2 from "../../images/play2.webp";


const Bottom = () => {
    return (
        <div className="bottom">
            <div className="sb_footer section_padding">
                <div className="sb_footer_links">
                    {/* <div className="sb_footer_links_sub"> */}
                    <div className="sb_footer_links_div">
                        <h4>RentalHomes</h4>
                        <p>Find Your Dream Home.</p>
                        <div className="Social_Media">
                            <RiFacebookBoxFill size={30} />
                            <RiTwitterFill size={30} />
                            <RiLinkedinBoxFill size={30} />
                            <RiInstagramLine size={30} />
                        </div>
                    {/* </div> */}
                    </div>
                    {/* <div className="sb_footer_links_sub2"> */}
                    <div className="sb_footer_links_div">
                        <h4>COMPANY</h4>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                        <a href="#/Careers">
                            <p>Careers</p>
                        </a>
                        <a href="#/Careers">
                            <p>Terms And Conditions</p>
                        </a>
                    </div>
                    <div className="sb_footer_links_div">
                        <h4>SUPPORT</h4>
                        <a href="#/About Us">
                            <p>Contact Us</p>
                        </a>
                        <a href="#/Careers">
                            <p>Feedback</p>
                        </a>
                    </div>
                    <div className="sb_footer_links_div">
                        <h4>PRIVACY POLICY</h4>
                        <a href="#/Privacy Policy">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="#/Notice of Collection">
                            <p>Housing Rights</p>
                        </a>
                        <a href="#/Do Not Sell My Info">
                            <p>Do Not Sell My Info</p>
                        </a>
                    </div>
                    <div className="sb_footer_links_div apps">
                        <h4>RENTAL APPS</h4>
                        <div className="sb_footer_img">
                            <p><img src={play2} alt=""/></p>
                            <p><img src={play3} alt=""/></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="footer_bottom">
                    <div className="footer_bottom_Qoute">
                        <p>Fair & Easy Housing</p>
                    </div>
                    <div className="footer_bottom_Qoute">
                        <p>RentalHomes is built by passionate people. WELCOME To Join Us!</p>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Bottom;