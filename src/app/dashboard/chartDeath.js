import React, { Component } from "react";
import { Line } from "react-chartjs-2";
class ChartDeath extends Component {
  state = {};
  areaOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 2,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    stepsize: 1,
  };
  componentDidMount() {
    let covidDailyDeceased = [];
    let covidDate = [];
    fetch("https://api.covid19india.org/states_daily.json")
      .then((res) => res.json())
      .then((data) => {
        for (const dataObj of data.states_daily) {
          if (dataObj.dl) {
            if (dataObj.status == "Deceased") {
              covidDailyDeceased.push(parseInt(dataObj.dl));
              covidDate.push(dataObj.date.substring(0, 6));
            }
          }
        }
        this.setState({
          data: {
            labels: covidDate,
            datasets: [
              {
                label: "Deceased",
                data: covidDailyDeceased,
                backgroundColor: "transparent",
                borderColor: "red",
                borderWidth: 2,
                fill: true,
                datasetKeyProvider: "key1",
              },
            ],
          },
        });
      });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="card-title mb-0">Deceased Cases</h3>
              </div>
              <div className="chart-container">
                <Line
                  data={this.state.data}
                  options={this.areaOptions}
                  datasetKeyProvider={this.datasetKeyProvider}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartDeath;
