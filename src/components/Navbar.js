import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <img
            style={{ height: 60, width: 60, borderRadius: 50 }}
            src={require("./logo.png")}
            alt={"..."}
          />
          <button style={{ marginRight: 200 }} className="btn btn-danger mx-12">
            Home
          </button>
          <button style={{ marginRight: 400 }} className="btn btn-danger mx-12">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
