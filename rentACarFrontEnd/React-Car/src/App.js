import React, { useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarListing from "./pages/CarListing";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import AdminPanel from "./pages/AdminPanel";
import Headers from "./components/Header/Header";

function App() {
  const [userType, setUserType] = useState("customer");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Headers
        userType={userType}
        setUserType={setUserType}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/signIn" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/signIn"
          element={
            <SignIn
              userType={userType}
              setUserType={setUserType}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
