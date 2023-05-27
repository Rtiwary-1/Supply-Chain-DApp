import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div class="landing-wrapper">
      <div id="heading">Supply Chain Management using Blockchain</div>
      <h3>This app is part of Capstone project for simulation of Pharmaceutical Supply Chain.</h3>
      <h3> WORKING</h3>
      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        
          
          <ul style={{ marginTop: "2%" }}>
          <li style={{ marginTop: "2%" }}>
            We pass that data as parameter in API(fastAPI) that calls smart
            contract using web3.py and send data to etehreum blockchain
          </li>
          <li style={{ marginTop: "2%" }}>
            Now users can see their data in real time using this frontend app
            like Current temperature and humidity ,Product info like id,weight
            etc ,worker id ,Location ,Delivery status
          </li>
        </ul>
      </div>
      <p>Connect to wallet</p>
      <p style={{ paddingTop: "3%" }}>
        Made By:{" "}
        <a
          style={{ color: "#00BFFF" }}
          href="https://github.com/Rtiwary-1"
          target="_blank"
        >
          Raghavendra Tiwary{" "}
        </a>
      </p>
    </div>
  );
};

export default Home;
