import React from "react";
import Popup from "../../home/Recents/popup/Popup";
import './compare.css'
import { compareList } from '../../data/Data.js';

const Compare = (props) => {
    

    return (
        <main className="table">
            <section className="table__header">
                <h1>
                    Compare different options
                </h1>
            </section>
            <section className="table__body">
                <table>
                    <thead>
                        <tr>
                            <th> image </th>
                            <th> <img src={compareList[0].cover} alt="" /> </th>
                            <th> <img src={compareList[1].cover} alt="" /> </th>
                            <th> <img src={compareList[2].cover} alt="" /> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="heading">
                            <td colSpan={4}>
                                Location Detials
                            </td>
                        </tr>
                        <tr className="borderBottom">
                            <td> Name </td>
                            <td> <label>{compareList[0].name}</label> </td>
                            <td> <label>{compareList[0].name}</label> </td>
                            <td> <label>{compareList[0].name}</label> </td>
                        </tr>
                        <tr className="borderBottom">
                            <td> Location </td>
                            <td> <label>{compareList[0].location}</label> </td>
                            <td> <label>{compareList[0].location}</label> </td>
                            <td> <label>{compareList[0].location}</label> </td>
                        </tr>
                        <tr className="heading">
                            <td colSpan={4}>
                                Eminities
                            </td>
                        </tr>
                        <tr className="borderBottom">
                            <td> Category </td>
                            <td> <label>{compareList[0].category}</label> </td>
                            <td> <label>{compareList[0].category}</label> </td>
                            <td> <label>{compareList[0].category}</label> </td>
                        </tr>
                        <tr className="borderBottom">
                            <td> Type </td>
                            <td> <label>{compareList[0].type}</label> </td>
                            <td> <label>{compareList[0].type}</label> </td>
                            <td> <label>{compareList[0].type}</label> </td>
                        </tr>
                        <tr className="heading">
                            <td colSpan={4}>
                                Cost
                            </td>
                        </tr>
                        <tr className="borderBottom">
                            <td> Price </td>
                            <td> <label>{compareList[0].price}</label> </td>
                            <td> <label>{compareList[0].price}</label> </td>
                            <td> <label>{compareList[0].price}</label> </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default Compare;