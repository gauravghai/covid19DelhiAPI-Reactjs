import React, { Component } from "react";
import ChartConfirmed from "./chartConfirmed";
import ChartDeath from "./chartDeath";
import DistrictPieChart from "./stateChart";

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covidCases: null,
      IndiaConfirm: null,
      IndiaRecover: null,
      IndiaActive: null,
      IndiaDeath: null,
      delhiConfirm: null,
      delhiDailyConfirm: null,
      delhiRecover: null,
      delhiDailyRecover: null,
      delhiActive: null,
      delhiDeath: null,
      delhiDailyDeath: null,
    };
  }
  componentDidMount() {
    fetch("https://api.covid19india.org/data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ covidCases: data, loading: false });
        console.log(data);
        this.state.covidCases.statewise.map((covid) =>
          covid.statecode == "DL"
            ? this.setState({
                delhiConfirm: covid.confirmed,
                delhiDailyConfirm: covid.deltaconfirmed,
                delhiRecover: covid.recovered,
                delhiDailyRecover: covid.deltarecovered,
                delhiActive: covid.active,
                delhiDeath: covid.deaths,
                delhiDailyDeath: covid.deltadeaths,
              })
            : null
        );

        this.state.covidCases.statewise.map((covid) =>
          covid.statecode == "TT"
            ? this.setState({
                IndiaConfirm: covid.confirmed,
                IndiaRecover: covid.recovered,
                IndiaActive: covid.active,
                IndiaDeath: covid.deaths,
              })
            : null
        );
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="fas fa-diagnoses  text-danger fa-2x"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Confirmed</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.delhiConfirm}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p className="text-muted mt-3 mb-0">
                    <i className="fas fa-chevron-circle-up"></i>{" "}
                    {this.state.delhiDailyConfirm} Today (Delhi){" "}
                  </p>
                  <p className="text-muted mt-3 mb-0 ml-auto">
                    {this.state.IndiaConfirm} Total India{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="fas fa-diagnoses text-warning fa-2x"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Active</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.delhiActive}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0 text-right">
                  {this.state.IndiaActive} Total India{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="fas fa-diagnoses text-success fa-2x"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Recovered</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.delhiRecover}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p className="text-muted mt-3 mb-0">
                    <i className="fas fa-chevron-circle-up"></i>{" "}
                    {this.state.delhiDailyRecover} Today (Delhi){" "}
                  </p>
                  <p className="text-muted mt-3 mb-0 ml-auto">
                    {this.state.IndiaRecover} Total India{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="fas fa-diagnoses text-info fa-2x"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Deceased</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.delhiDeath}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <p className="text-muted mt-3 mb-0">
                    <i className="fas fa-chevron-circle-up"></i>{" "}
                    {this.state.delhiDailyDeath} Today (Delhi){" "}
                  </p>
                  <p className="text-muted mt-3 mb-0 ml-auto">
                    {this.state.IndiaDeath} Total India{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <ChartConfirmed />
          </div>
          <div className="col-md-6 col-12">
            <ChartDeath />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-sm-12 grid-margin stretch-card">
            <div className="row flex-grow">
              <div className="col-xl-12 col-lg-6 col-sm-6 stretch-card">
                <div className="card card-revenue-table mt-4 mt-sm-0 mt-xl-4">
                  <div className="card-body">
                    <h1>tweet</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <DistrictPieChart />
          <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h3>Covid Information</h3>
                <h6>No Information Yet</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card">
              <a
                className="text-muted"
                href="https://www.facebook.com/covic19delhi"
                target="_blank"
              >
                <div className="card-body py-5">
                  <div className="d-flex flex-row justify-content-center align-items">
                    <i className="fab fa-facebook-f text-facebook fa-2x"></i>
                    <div className="ml-3">
                      <h6 className="text-facebook font-weight-semibold mb-0">
                        Facebook Page
                      </h6>
                      <p className="text-muted card-text">
                        Join us on #facebook & stay updated
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card">
              <a
                className="text-muted"
                href="https://twitter.com/covid19delhi"
                target="_blank"
              >
                <div className="card-body py-5">
                  <div className="d-flex flex-row justify-content-center align-items">
                    <i className="fab fa-twitter text-twitter fa-2x"></i>
                    <div className="ml-3">
                      <h6 className="text-twitter font-weight-semibold mb-0">
                        Twitter Page
                      </h6>
                      <p className="text-muted card-text">
                        View Updates On Twitter
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card">
              <a
                href="https://github.com/gauravghai/covid19delhiproject"
                target="_blank"
              >
                <div className="card-body py-5">
                  <div className="d-flex flex-row justify-content-center align-items">
                    <i className="fab text-muted fa-github fa-2x"></i>
                    <div className="ml-3">
                      <h6 className="text-google font-weight-semibold mb-0">
                        Click Here
                      </h6>
                      <p className="text-muted card-text">
                        Open Source Code On GitHub
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-3 grid-margin stretch-card">
            <div className="card">
              <a
                className="text-muted"
                href="https://t.me/covid19delhiDev"
                target="_blank"
              >
                <div className="card-body py-5">
                  <div className="d-flex flex-row justify-content-center align-items">
                    <i className="fab fa-telegram text-twitter fa-2x"></i>
                    <div className="ml-3">
                      <h6 className="text-twitter font-weight-semibold mb-0">
                        Telegram Group
                      </h6>
                      <p className="text-muted card-text">
                        Join telegram for DEV'S
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
