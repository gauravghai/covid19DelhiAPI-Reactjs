import React, { Component, Suspense, lazy } from "react";
import "./App.scss";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

class App extends Component {
  state = {};
  render() {
    let navbarComponent = <Navbar />;
    let footerComponent = <Footer />;
    return (
      <Suspense fallback={<Spinner />}>
        {navbarComponent}
        <div className="container-scroller">
          <div className="container-fluid full-page-wrapper">
            <div className="content-wrapper">
              <Dashboard />
              {footerComponent}
            </div>
          </div>
        </div>
      </Suspense>
    );
  }
}

export default App;
