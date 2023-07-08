import React from "react";
import Featured from "./Featured/Featured";
import Recent from "./Recents/Recent";
import Searchcomponent from "./search/Searchcomponent";

const Home = () => {
    return (
        <>
            <Searchcomponent />
            <Featured />
            <Recent />
        </>
    )
}

export default Home;