// src/Components/Loader.jsx
import React from "react";
import './Loading.css'; // style below

const Loading = () => {
  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
