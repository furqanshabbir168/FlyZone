import { createContext, useEffect, useState } from "react";
import axios from 'axios';



export const CompanyContext = createContext(null);

function CompanyContextProvider(props){

    const [ flights , setFlights ] = useState([]);
    const url = 'https://flyzone-backend-eight.vercel.app'
    // const url = 'http://localhost:4000';

    // fetch flights
    async function fetchFlightsData() {
        try{
            const response = await axios.get(`${url}/api/flight/list`)
        if(response){
            setFlights(response.data.data);
        }
        } catch(error){
            console.error("Error fetching flights:", error);
        }
    }

    // fetch booking
    async function fetch() {
        try{
            
        }catch(error){
            console.error("Error fetching bookings:", error);
        }
    }

    useEffect(()=>{
        fetchFlightsData();
    },[])



    const ContextValue = {flights , url}
    return(
        <CompanyContext.Provider value={ContextValue}>
            {props.children}
        </CompanyContext.Provider>
    );
}
export default CompanyContextProvider