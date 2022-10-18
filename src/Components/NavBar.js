import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="item-nav"></Link>
      <button className="btn"> Sign up</button>
      <button className="btn"> Sign in</button>
      <button className="btn"> logout</button>
    </div>
  );
}
