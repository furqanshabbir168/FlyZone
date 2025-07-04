import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Moments from "../Components/Moments/Moments";

function Home (){
    return(
        <div>
            <Hero/>
            <Popular/>
            <Moments/>
        </div>
    );
}
export default Home