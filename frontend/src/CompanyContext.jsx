import { createContext } from "react";
import flights from "./assets/flights";



export const CompanyContext = createContext(null);

function CompanyContextProvider(props){
    const ContextValue = {flights}
    return(
        <CompanyContext.Provider value={ContextValue}>
            {props.children}
        </CompanyContext.Provider>
    );
}
export default CompanyContextProvider