import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="mb-5 pb-3">
        <nav className="navbar navbar-expand-xl navbar-expand-lg fixed-top p-0 black px-3">
          <img
            src={require("../../assets/images/dashboard/covid19delhi.png")}
            alt="covid19delhi logo"
            className="p-2"
          />
          <h1
            className="mb-0 p-3 text-muted ml-auto"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            #DelhiFightsCrona
          </h1>
        </nav>
      </header>
    );
  }
}

export default Navbar;
