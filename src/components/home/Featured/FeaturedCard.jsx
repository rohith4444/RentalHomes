import React from "react";
import { GiFamilyHouse } from "react-icons/gi";
import { BsFillHouseFill, BsBuildingFill } from "react-icons/bs";
import { MdOutlineVilla } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";

const FeaturedCard = () => {
    const featured = [
        {
            cover: <GiFamilyHouse size={40} />,
            name: "Multi Family House",
            total: "122 Property",
        },
        {
            cover: <BsFillHouseFill size={40} />,
            name: "Individual Homes",
            total: "155 Property",
        },
        {
            cover: <BsBuildingFill size={40} />,
            name: "Apartment",
            total: "300 Property",
        },
        {
            cover: <MdOutlineVilla size={40} />,
            name: "Villas",
            total: "80 Property",
        },
        {
            cover: <AiOutlineShop size={40} />,
            name: "Office & Commercial Space",
            total: "80 Property",
        },
    ]
    return (
        <>
            <div className="content grid-container mtop">
                {featured.map((item, index) => (
                    <div className="grid-item" key={index}>
                        {item.cover}
                        <h4>{item.name}</h4>
                        <label>{item.total}</label>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FeaturedCard;