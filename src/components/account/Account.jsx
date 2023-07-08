import React from "react";
import { useState } from "react";
import './account.css';
import Addproperty from "./components/addproperty/Addproperty";
import Personal from "./components/personal/Personal";
import PropertyList from "./components/propertyList/PopertyList";
import Sidebar from "./components/sidebar/Sidebar";

const Account = () => {
    const [component, setComponent] = useState('/');
    const changeComponent = comp => {
        setComponent(comp);
    };
    return (
        <>
            <Sidebar component={component} changeComponent={changeComponent}>
                {component === '/' ? <Personal />
                    : component === '/propertyList' || component === '/favoriteList' ? <PropertyList />
                    : component === '/addProperty' ? <Addproperty />
                    : component}
            </Sidebar>
        </>
    );
};

export default Account;