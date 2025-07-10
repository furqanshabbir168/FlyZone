import React, { useEffect , useState} from "react";
import './List.css';
import axios from 'axios'
import toast from "react-hot-toast";

function List({url}){

    const [flights , setFlights ] = useState([]);

    async function fetchFlights() {
        const response = await axios.get(`${url}/api/flight/list`);
        if(response){
            setFlights(response.data.data);
        } else{
            toast.error("Something went wrong");
        }
    }
    console.log(flights);

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
        </div>
    );
}
export default List