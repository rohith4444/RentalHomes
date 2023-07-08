import React from 'react';
import './About.css';
import about from "../images/About.png";
import RRprofile from "../images/Rohithprofile.jpg";
import Sprofile from "../images/Sandeepprofile.jpeg";
import { GrLinkedin, FaGithub, GrMailOption } from "react-icons/all";
import { colors } from "../data/Data";

const About = () => {
    return (
        <div className="about">
            <div className="about_heading">
                <h1>About Us</h1>
            </div>
            <div className="about_bottom">
                <div className="about_left">
                    <p>Finding a new home is just the beggining</p>
                </div>
                <div className="about_right">
                    <p><img src={about} alt=""/></p>
                </div>
            </div>
            <div className="about_purpose">
                <h2>Our Purpose</h2>
                <p>We provide a platform for everyone to find a dream home.</p>
            </div>
            <div className="about_vision">
                <p>We believe that finding a new home is much more than simply relocating. 
                    It signifies progress. A new chapter, and a fresh start. 
                    Regardless of whether your move takes you across the nation or just down the street, 
                    it is important that you genuinely love the place you call home.</p>
                <p>Unfortunately, the current rental experience in our country is 
                   flawed, outdated, and draining. We waste countless hours searching and traveling, 
                   only to settle for accommodations that are not reasonable and don't truly 
                   feel like home. However, this frustrating scenario ends now.</p>
                <p>At Rental Homes, we are dedicated to revolutionizing the rental process forever.
                   Our goal is to make it simpler, faster, and more equitable and flexible. 
                   By transforming this vision into reality, we are opening up opportunities for 
                   everyone to enhance their living experiences, one fresh start at a time.</p>
            </div>
            <div className="about_helpblock">
                <div className="about_help">
                    <h2>Who We Help</h2>
                </div>
                <div className="about_helptop">
                    <div className="helptop_left">
                        <p>Renters</p>
                    </div>
                    <div className="helptop_right">
                        <p>Experience the convenience of renting a home, just like booking a hotel room.
                            With improved browsing and search functionalities, we are dedicated to offering
                            a faster, simpler, and more trustworthy experience throughout the entire rental process.</p>
                    </div>
                </div>
                <div className="about_helptop">
                    <div className="helptop_left">
                        <p>Property Owners</p>
                    </div>
                    <div className="helptop_right">
                        <p>Through our services, we establish connections between property owners,
                            multifamily partners, and reliable renters, empowering them with efficient tools to 
                            expedite the process of filling vacancies.</p>
                    </div>
                </div>
            </div>
            <div className="about_team">
                <div className="teamhead">
                    <h2>Our Team</h2>
                </div>
                <div className="teamhead">
                    {/* Column 1 */}
                    <div className='column'>
                        <div className='card'> 
                            <div className='img-container'>
                                <img src={RRprofile} alt=''/>
                            </div>
                            <h3>Rohith Reddy Mandala</h3>
                            <p>Co-Founder</p>
                            <div className='social-links'>
                                <GrLinkedin size={27} color="black" />
                                <FaGithub size={27} color="black" />
                                <GrMailOption size={27} color="black" />
                            </div>
                        </div>
                    </div>
                    {/* Column 2 */}
                    <div className='column'>
                        <div className='card'> 
                            <div className='img-container'>
                                <img src={Sprofile} alt=''/>
                            </div>
                            <h3>Sandeep Varma Indukuri</h3>
                            <p>Co-Founder</p>
                            <div className='social-links'>
                                <GrLinkedin size={27} color="black" />
                                <FaGithub size={27} color="black" />
                                <GrMailOption size={27} color="black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upcoming">
                <div className="about_upcoming">
                    <div className="about_title">
                        <h2>Upcoming Updates :</h2> 
                    </div>
                    <div className="about_updates">
                        <ul className="aboutul">
                            <li>Enabling renters to request a virtual property tour from the owner prior to an in-person visit.</li>
                            <li>Offering a comprehensive and secure online rental application procedure that facilitates 
                                communication between renters and owners, enables agreement on terms and conditions, and f
                                acilitates the signing of leases, ensuring a seamless and efficient process.</li>
                            <li>Offering the assistance of qualified real estate agents to aid you in discovering, 
                                selling, or renting a home.</li>
                            <li>Providing premium membership plans that grant subscribed users the advantage
                                of top search result placement for their listings.</li>
                            <li>Facilitating seamless online rent payment solutions through Rental Homes for added convenience.</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;