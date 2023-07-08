import React, { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import usePlacesAutoComplete, { getGeocode, getLatLng } from "use-places-autocomplete";
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
// import "@reach/combobox/styles.css";
import "./Buy.css";
import ListCard from "../home/Recents/listview/ListCard";
// AIzaSyDCRfOWq8f79d4HQeeNIVzQHdfSE5I4xn0

const Buy = () => { 
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDCRfOWq8f79d4HQeeNIVzQHdfSE5I4xn0",
        libraries: ["places"],
    });
    return (
        <>
            <div className="screen">
                <div className="map">
                    {isLoaded ? 
                        <Map /> :
                        "Loading..."}
                </div>
                <div className="properties">
                    <ListCard />
                </div>
            </div>
        </>
    )
}

function Map() {
    const center = useMemo(() => ({ lat:27.779980, lng: -97.502380 }), []);
    const [selected, setSelected] = useState(null);

    return (
        <>
            <PlacesAutoComplete setSelected={setSelected} />
            <GoogleMap zoom={10} center={selected} mapContainerClassName="gMap">
                { selected && <MarkerF position={selected} /> }
            </GoogleMap>
        </>
    );
}

const PlacesAutoComplete = ({ setSelected }) => {
    const { ready, value, setValue, suggestions:{status, data}, clearSuggestions } = usePlacesAutoComplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        console.log(address, results, lat, lng);
        setSelected({ lat, lng })
    }
    return (
        <div className="filter-div">
            <div className="inputfilter">
                <input type="text" name="area" value={value} onChange={(e) => {setValue(e.target.value)}} 
                className="input" placeholder="Search for area" disabled={!ready} list="searched_places" />
                <ul id="searched_places" className="filterSearch">
                    {status == "OK" && data.map(({place_id, description}) => (
                        <li value={description} key={place_id} onClick={(e) => {console.log(e);handleSelect(e.target.textContent);}}>{description}</li>
                    ))}
                </ul>
            </div>
            <div className="inputdropdown">
                <select name="bathrooms" id="bathrooms" className="input transparent">
                    <option value="" disabled selected>Bathrooms</option>
                    {Array.from(Array(11).keys()).map((item, index) => {
                        return (<option value={item} id={index}>{item}</option>);
                    })}
                </select>
            </div>
            <div className="inputdropdown">
                <select name="bedrooms" id="bedrooms" className="input transparent">
                    <option value="" disabled selected>Bedrooms</option>
                    {Array.from(Array(11).keys()).map((item, index) => {
                        return (<option value={item} id={index}>{item}</option>);
                    })}
                </select>
            </div>
        </div>
    )
}

export default Buy;