import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auctions");
        setAuctions(res.data);
      } catch (err) {
        console.error("Error fetching auctions", err);
      }
    };
    fetchAuctions();
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      <h1 className="dashboard-title">Welcome to IIIT Bhagalpur Auction Platform</h1>
      <div className="auction-grid">
        {auctions.length > 0 ? (
          auctions.map((auction) => (
            <div key={auction.id} className="auction-card">
              <img src={auction.image} alt={auction.title} className="auction-image" />
              <h2>{auction.title}</h2>
              <p>Current Bid: ₹{auction.currentBid}</p>
              <button className="bid-btn">Place Bid</button>
            </div>
          ))
        ) : (
          <p>No auctions available right now.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
