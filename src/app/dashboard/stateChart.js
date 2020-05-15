import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
class DistrictPieChart extends Component {
  state = {};
  usersDoughnutChartOptions = {
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };
  componentDidMount() {
    let covidConfirm = [];
    let covidDistrict = [];
    fetch("https://api.covid19india.org/v2/state_district_wise.json")
      .then((res) => res.json())
      .then((data) => {
        for (const dataObj of data) {
          if (dataObj.state == "Delhi") {
            dataObj.districtData.map((district) => {
              covidConfirm.push(parseInt(district.confirmed));
              covidDistrict.push(district.district);
            });
          }
        }
        this.setState({
          pieChart: {
            datasets: [
              {
                data: covidConfirm,
                backgroundColor: [
                  "#ffc107",
                  "green",
                  "#28a745",
                  "#17a2b8",
                  "orange",
                  "brown",
                  "cornflowerblue",
                  "coral",
                  "darkslateblue",
                  "yellowgreen",
                  "unset",
                  "#FF0017",
                ],
                borderColor: [
                  "#ffc107",
                  "green",
                  "#28a745",
                  "#17a2b8",
                  "orange",
                  "brown",
                  "cornflowerblue",
                  "coral",
                  "darkslateblue",
                  "yellowgreen",
                  "unset",
                  "#FF0017",
                ],
              },
            ],
            labels: covidDistrict,
          },
        });
      });
  }
  render() {
    return (
      <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-5 d-flex flex-wrap align-items-center">
                <h4 className="col-12 card-title text-center font-weight-medium mb-4 d-block d-md-none">
                  Delhi Districts Covid Cases
                </h4>
                <Doughnut
                  data={this.state.pieChart}
                  options={this.usersDoughnutChartOptions}
                  width={180}
                />
              </div>
              <div className="col-md-7">
                <h4 className="card-title font-weight-medium mb-0 d-none d-md-block">
                  Delhi Districts Covid Cases
                </h4>
                <div className="wrapper mt-4 d-none d-md-block">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="">
                      <div>
                        <small className="text-warning ml-2">
                          Central Delhi
                        </small>
                      </div>
                      <div>
                        <small className="ml-2" style={{ color: "green" }}>
                          East Delhi
                        </small>
                      </div>
                      <div>
                        <small className="text-success ml-2">New Delhi</small>
                      </div>
                      <div>
                        <small className="text-info ml-2">North Delhi</small>
                      </div>
                      <div>
                        <small className="ml-2" style={{ color: "orange" }}>
                          North East Delhi
                        </small>
                      </div>
                      <div>
                        <small className="ml-2" style={{ color: "brown" }}>
                          North West Delhi
                        </small>
                      </div>
                      <div>
                        <small
                          className="ml-2"
                          style={{ color: "cornflowerblue" }}
                        >
                          Shahdara
                        </small>
                      </div>
                      <div>
                        <small className="ml-2" style={{ color: "coral" }}>
                          South Delhi
                        </small>
                      </div>
                      <div>
                        <small
                          className="ml-2"
                          style={{ color: "darkslateblue" }}
                        >
                          South East Delhi
                        </small>
                      </div>
                      <div>
                        <small className="ml-2" style={{ color: "unset" }}>
                          South West Delhi
                        </small>
                      </div>
                      <div>
                        <small
                          className="ml-2"
                          style={{ color: "darkslateblue" }}
                        >
                          West Delhi
                        </small>
                      </div>
                      <div>
                        <small className="text-danger ml-2">Unknown</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DistrictPieChart;
