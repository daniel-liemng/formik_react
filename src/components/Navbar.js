import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ margin: "2rem", textAlign: "center" }}>
      <Link to='/'>Home</Link> | <Link to='/login'>Login</Link> |{" "}
      <Link to='/register'>Register</Link> | <Link to='/enroll'>Enroll</Link>
    </div>
  );
};

export default Navbar;
