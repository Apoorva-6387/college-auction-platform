import React, { useEffect, useState } from "react";
import { useSocket } from "../context/SocketContext";

const Auction = () => {
  const socket = useSocket();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.on("updateBids", (newBid) => {
      setBids((prevBids) => [...prevBids, newBid]);
    });

    return () => socket.off("updateBids"); 
  }, [socket]);

  return (
    <div>
      <h2>Live Bidding</h2>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>{bid.user} bid ₹{bid.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Auction;
