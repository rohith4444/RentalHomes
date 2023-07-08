import React, { useState } from "react";
import Heading from "../../common/Heading";
import './recent.css';
import GridCard from "./gridview/GridCard";
import ListCard from "./listview/ListCard";
import Popup from "./popup/Popup";

const Recent = () => {
    const [listView, setListView] = useState(false);
    const [popup, setPopup] = useState(false);
    return (
        <>
            <section className="recent padding">
                <div className="container">
                    <Heading title="Recent Properties Listed" subtitle="asdfasjkbd fklsad hfksj dfbkljaskbdfksbfjksavbfjasdbfkja svfkjsdhvfjasd fsb fkjsa dfvakjsdvfkjsdvfjhs dbfljshdv fkjashdvf"/>
                    <div className="listorgrid">
                        {/* <Icon name="th-large" size={25} color={this.state.listView ? 'green' : 'red' } /> */}
                        <button
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                            onClick={() => setListView(!listView)}
                        >
                            {listView ? 'list' : 'grid'}
                        </button>
                    </div>
                    {listView ? <ListCard openPopup={() => { setPopup(true) }} /> : <GridCard openPopup={() => { setPopup(true) }} />}
                    <Popup trigger={popup} closePopup={() => { setPopup(false) }}>
                        <div className="popupWhole">
                            <div className="popupImage">
                                <img src={'../images/list/p-1.png'} alt='' />
                            </div>
                            <div className="popupData borderTop">
                                <div className="details borderRight">
                                    <h4>HouseDetails</h4>
                                    <div className="dataEntry">
                                        <label>House Type:</label>
                                        <p>Flat</p>
                                    </div>
                                </div>
                                <div className="details borderRight">
                                    <h4>Eminities</h4>
                                    <p>This house is in close proximity to many nessecery</p>
                                </div>
                                <div className="details">
                                    <h4>Contact details</h4>
                                    <div className="dataEntry">
                                        <label>Email:</label>
                                        <p>asdf@asdfa.com</p>
                                    </div>
                                    <div className="dataEntry">
                                        <label>Phone:</label>
                                        <p>+91 9876543210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </div>
            </section>
        </>
    );
}

export default Recent;