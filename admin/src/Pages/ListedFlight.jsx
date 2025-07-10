import React from "react";
import List from "../Components/List/List";

function ListedFlight ({url}) {
    return (
        <div>
            <List url={url}/>
        </div>
    );
}
export default ListedFlight