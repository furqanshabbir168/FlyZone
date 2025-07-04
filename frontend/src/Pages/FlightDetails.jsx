import React from "react";
import Flight from "../Components/Flight/Flight";
import AvlDates from "../Components/AvlDates/AvlDates";
import Popular from "../Components/Popular/Popular";

function FlightDetails () {
    return(
        <div>
            <Flight/>
            <AvlDates/>
            <Popular/>
        </div>
    );
}
export default FlightDetails