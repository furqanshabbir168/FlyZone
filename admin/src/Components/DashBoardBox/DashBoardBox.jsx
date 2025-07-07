import React, { useState } from "react";
import './DashBoardBox.css'
import { Wallet, Users, CalendarCheck2, PlaneTakeoff } from "lucide-react";
import Gragh from "../Gragh/Graph";


function DashBoardBox () {
    const [currentState, setCurrentState ] = useState('revenue');

    return (
        <>
        <div className="boxes">
           <div onClick={()=>{setCurrentState('revenue')}} className={currentState==="revenue"?"alert":"revenue"}>
            <h3>Total Revenue</h3>
            <p className="value">$4,800</p>
            <Wallet/>
           </div>
           <div onClick={()=>{setCurrentState('bookings')}} className={currentState==="bookings"?"alert":"bookings"}>
            <h3>Total Bookings</h3>
            <p className="value">100</p>
            <CalendarCheck2/>
           </div>
           <div onClick={()=>{setCurrentState('flights')}} className={currentState==="flights"?"alert":"flights"}>
            <h3>Available Flights</h3>
            <p className="value">22</p>
            <PlaneTakeoff/>
           </div>
           <div onClick={()=>{setCurrentState('users')}} className={currentState==="users"?"alert":"users"}>
            <h3>Total Users</h3>
            <p className="value">450</p>
            <Users/>
           </div>
        </div>

        {/* Graph shows based on clicked box */}
        <Gragh type={currentState}/>
        </>
    );
}
export default DashBoardBox;
