import React, { useState } from "react";
import './Moments.css'
import FlightMoments from "../../assets/FlightMoments";
import ReactPlayer from 'react-player';


function Moments () {

    const [currentVideo , setCurrentVideo ] = useState(FlightMoments[0].videoUrl);

    function handleClickChange (videoUrl){
        setCurrentVideo(videoUrl);
    }

    return(
        <div className="moments" id="moment">
            <div className="moments-container">
            <h1>Fly Zone Moments</h1>
            <div className="video-player">
                <ReactPlayer url={currentVideo} controls={false}/>
            </div>
            <div className="thumbnail-section">
                {FlightMoments.map((video)=>{
                    return <div key={video.id} className="thumbnail">
                        <img onClick={()=>{handleClickChange(video.videoUrl)}} src={video.thumbnail} alt="" />
                    </div>
                })}
            </div>
        </div>
        </div>
    );
}
export default Moments