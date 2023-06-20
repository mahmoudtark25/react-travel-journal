import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} className="navbar--logo" alt="logo" />
            <p>my travel journal.</p>
        </nav>
    );
}