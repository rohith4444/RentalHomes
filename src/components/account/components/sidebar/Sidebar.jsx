import React, { useState } from 'react';
// import './sidebar.css';
import {
    FaBars,
    FaUserAlt,
    FaThList,
}from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { BsHouseAddFill } from "react-icons/bs";

const Sidebar = ({ component, changeComponent, ...props }) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/",
        //     name:"Personal",
        //     icon:<FaTh/>
        // },
        {
            path: "/",
            name: "Personal",
            icon: <FaUserAlt/>
        },
        // {
        //     path:"/analytics",
        //     name:"Analytics",
        //     icon:<FaRegChartBar/>
        // },
        // {
        //     path:"/comment",
        //     name:"Comment",
        //     icon:<FaCommentAlt/>
        // },
        {
            path: "/addProperty",
            name: "Add Property",
            icon: <BsHouseAddFill />
        },
        {
            path: "/propertyList",
            name: "Property List",
            icon: <FaThList/>
        },
        {
            path: "/favoriteList",
            name: "Favorite Properties",
            icon: <MdFavorite />
        }
    ]
    return (
        <div className='sidebar_container'>
           <div className={isOpen ? "sidebar-open" : "sidebar-close"}>
               <div className="top_section">
                   <h1 className={isOpen ? "logo-open" : "logo-close"}>Logo</h1>
                   <div className={isOpen ? "bars-open" : "bars-close"}>
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <div key={index} className={item.path === component ? "active" : "link"} onClick={() => changeComponent(item.path)}>
                           <div className="icon">{item.icon}</div>
                           <div className={isOpen ? "link_text-open" : "link_text-close"}>{item.name}</div>
                       </div>
                   ))
               }
           </div>
           <main>{props.children}</main>
        </div>
    );
};

export default Sidebar;