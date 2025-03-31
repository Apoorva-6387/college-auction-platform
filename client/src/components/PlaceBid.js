import React, { useState } from "react";
import { useSocket } from "../context/SocketContext";

const PlaceBid = () => {
  const socket = useSocket();
  const [bidAmount, setBidAmount] = useState("");

  const handlePlaceBid = () => {
    if (!socket || !bidAmount) return;

    const newBid = { user: "Apoorva", amount: bidAmount }; 
    socket.emit("placeBid", newBid); 

    setBidAmount(""); 
  };

  return (
    <div>
      <input
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        placeholder="Enter bid amount"
      />
      <button onClick={handlePlaceBid}>Place Bid</button>
    </div>
  );
};

export default PlaceBid;
