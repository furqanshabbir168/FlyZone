import React, { useState } from "react";
import './SideBar.css';
import { LayoutDashboard, PlusSquare, ListOrdered, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SideBar() {
    const [currentState, setCurrentDtate] = useState('dashboard');
    const navigate = useNavigate();

    const handleNavigation = (state, path) => {
        setCurrentDtate(state);
        navigate(path);
    };

    function handleBooking(){
        toast.error("You can't see bookings in demo mood!")
    }

    return (
        <div className="side-bar">
            <div
                onClick={() => handleNavigation('dashboard', '/admin/dashboard')}
                className={currentState === "dashboard" ? "active" : "dashboard"}
            >
                <LayoutDashboard />
                <p>DashBoard</p>
            </div>

            <div
                onClick={() => handleNavigation('add-flight', '/admin/add-flight')}
                className={currentState === "add-flight" ? "active" : "add-flight"}
            >
                <PlusSquare />
                <p>Add Flight</p>
            </div>

            <div
                onClick={() => handleNavigation('list-flight', '/admin/listed-flights')}
                className={currentState === "list-flight" ? "active" : "list-flight"}
            >
                <ListOrdered />
                <p>Listed Flight</p>
            </div>

            <div
                onClick={handleBooking}
                className={currentState === "flight-booking" ? "active" : "flight-booking"}
            >
                <ClipboardList />
                <p>Bookings</p>
            </div>
        </div>
    );
}

export default SideBar;
