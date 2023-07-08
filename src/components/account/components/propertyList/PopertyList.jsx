import React from "react";
import { useState } from "react";
import GridCard from "../../../home/Recents/gridview/GridCard";
import ListCard from "../../../home/Recents/listview/ListCard";

const PropertyList = () => {
    const [listView, setListView] = useState(false);
    const [popup, setPopup] = useState(false);
    return (
        <div className="property_list">
            {listView ? <ListCard openPopup={() => { setPopup(true) }} /> : <GridCard openPopup={() => { setPopup(true) }} />}
        </div>
    );
};

export default PropertyList;