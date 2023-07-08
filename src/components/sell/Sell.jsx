import React from "react";
import "./Sell.css"

const Sell = () => { 
    return (
    <>
        <div className="sell">
            <p>Sell or Rent Your Home</p>
        </div>
        <div className="listparent">
            <div className="list">
                <div className="listing">
                    <h2>Post Rental Houses To Reach Millions Of Renters</h2> 
                </div>
                <div className="listingcon">
                    <p className="listconp2">
                    Accelerate the process of filling vacancies with immediate leads. 
                    Utilize Rental Homes to list your property and swiftly connect with renters
                    who are ready to move in. Reduce the time your property stays on the market and
                    increase your potential earnings. 
                    Boost landlord profits with reduced vacancies and zero missed rent.
                    </p>
                    <div className="listItems">
                        <ul className="listul">
                            <li>Zero Vacancies</li>
                            <li>Better Tenants</li>
                            <li>More Mental Calmness</li>
                        </ul>
                    </div>
                    <div className="listingconparent">
                        <p className="listingconp">
                            Put your property on the map for free.
                        </p>
                        <button onClick={""}>Post Your Property</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="list_part_parent">
            <div className="list_part">
                <div className="list_section">
                    <p className="listp">Reach More Renters</p>
                    <p className="listp2">List your property on Rental Homes and benefit from 
                    cost-free property promotion.</p>
                </div>
                <div className="list_section">
                    <p className="listp">Get Quality Leads</p>
                    <p className="listp2">Connect with stress-free renters who are eligible, 
                    ready for immediate move-in, and align with your specifications.</p>
                </div>
                <div className="list_section">
                    <p className="listp">Fill Vacancies Fast</p>
                    <p className="listp2">Avoid losing money on your vacant rental property.  
                    Link up with millions of renters actively browsing our platform daily to expedite the 
                    leasing of your unit.</p>
                </div>
            </div>
        </div>
        <div className="sellbottom">
            <p className="sellbottomp">Ready to get started?</p>
            <p className="sellbottomp1">Register now and take advantage of Rental Homes for free.</p>
            <button className="sellbottombutton" onClick={""}>Get started</button>
        </div>
    </>
    ) 
}

export default Sell;