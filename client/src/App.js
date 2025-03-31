import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSocket } from "./context/SocketContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on("updateBids", (data) => {
      console.log("New bid received:", data);
    });

    return () => socket.off("updateBids"); 
  }, [socket]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
