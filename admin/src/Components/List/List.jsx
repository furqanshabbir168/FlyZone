import React, { useEffect , useState} from "react";
import './List.css';
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-removebg-preview.png";

function List({url}){

    const [flights , setFlights ] = useState([]);
    const navigate = useNavigate();

    async function fetchFlights() {
        const response = await axios.get(`${url}/api/flight/list`);
        if(response){
            setFlights(response.data.data);
        } else{
            toast.error("Something went wrong");
        }
    }

    useEffect(()=>{
        fetchFlights();
    },[])

    return(
        <div className="list">
            <div className="headings">
                <h3>Flight</h3>
                <h3>Title</h3>
                <h3>Airline Name</h3>
                <h3>Earnings</h3>
                <h3>Bookings</h3>
            </div>
            {flights.map((flight)=>{
                return <div key={flight._id} className="list-flight-rows" onClick={()=>{navigate(`/admin/listed-flights/${flight._id}`)}}>
                    <img src={logo} alt="" />
                    <p>{flight.title}</p>
                    <p>{flight.airline}</p>
                    <p>_</p>
                    <p>_</p>
                </div>
            })}
        </div>
    );
}
export default List