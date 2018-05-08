import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Moment from "moment";
import NavTabs from "../NavTabs";
import SidebarContainer from "../Sidebar";
import Footer from "../Footer";

var axios = require("axios");

class Graph extends Component {
  constructor(props) {
    super(props);

    this.chartEvents = [
      {
        eventName: "select",
        callback(Chart) {
          // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
          console.log("Selected ", Chart.chart.getSelection());
        }
      }
    ];

    this.state = {
      options: {
        title: "My Moods",
        titleFontSize: 25,
        hAxis: {
          title: "Date",
          minValue: new Date("05-01-2018"),
          maxValue: new Date("05-07-2018")
        },
        vAxis: { title: "Mood Range", minValue: 0, maxValue: 5 },
        legend: "right",
        legendFontSize: 10
      },
      rows: [
        // return graphData.map((item, i)=> )
        //[Date, AnswerValues]
        //dummy data in order to render graph
        // [new Date('05-02-2018'), 1,2,4,4,2],
        // [new Date('05-03-2018'), 2,4,4,5,5],
        // [new Date('05-04-2018'), 1,5,1,2,3],
        // [new Date('05-05-2018'), 3,4,1,2,3],
        // [new Date('05-06-2018'), 2,5,1,2,3]
      ],
      columns: [
        {          
          type: "date",
          label: "Date"
        },
        {
          type: "number",
          label: "Anxiety"
        },
        {
          type: "number",
          label: "Depression"
        },
        {
          type: "number",
          label: "Concentration"
        },
        {
          type: "number",
          label: "Energy"
        },
        {
          type: "number",
          label: "Sleep"
        }
      ]
    };
  }

  GraphData() {
    axios
      .get("/api/graph")
      // .then(response => console.log(response.data));
      .then(res => {
        const answers = res.data;
        console.log(answers);
        let anxiety = [];
        let depression = [];
        let concentration = [];
        let energy = [];
        let sleep = [];
        let date = [];
        let formattedDate = [];


        answers.forEach(element => {
          anxiety.push(element.anxiety);
          depression.push(element.depression);
          concentration.push(element.concentration);
          energy.push(element.energy);
          sleep.push(element.sleep);
          date.push(element.createdAt);
        });
        //format the createdAt timestamp from mySQL using Moment.js
        date.forEach(element => {
          // console.log("hi");
          const dateItem = Moment(element).local().format("MM-DD-YYYY");
          formattedDate.push(dateItem);
          // console.log(dateItem);
        });

        console.log(formattedDate);

        console.log("Sleep", sleep);
        console.log("Anxiety", anxiety);
        console.log("Depression", depression);
        console.log("Energy", energy);
        console.log("Concentration", concentration);
        console.log("Date", date);
        //need to loop through each array and push into a new row. map? 

        let combinedArrays = [anxiety, depression, concentration, energy, sleep];
        console.log(combinedArrays);

        // for (var i = 0; i < anxiety.length; i ++){
        //   const blah = anxiety[i];
        //   this.state.rows.push(blah);
        //   console.log(blah);
          
        // }
        // console.log(this.state.rows);
        
        // this.setState({
        //   rows: [formattedDate, anxiety, depression, concentration, energy, sleep]
        //   //for loop through formattedDate and apply the new Date constructor
        // });
      });
    //this does return all the db info to the state. but need to first loop thru it before setting state.
    // .then(response => this.setState({graphData:response.data}));
  }

  // for (var i = 0; i < length; ++i) {
  //   rows.push([bitcoinArr[i], new Date(dateArr2[i])]);
  // }


  componentDidMount() {
    this.GraphData();
  }

  render() {
    return (
      <Router>
        <Container className="reactstrapContainer">
          <Row>
            <Col lg="12" className="NavTabs">
              <NavTabs />
            </Col>
          </Row>
          <Row>
            <Col lg="2" className="sidebar">
              <SidebarContainer />{" "}
            </Col>

            <Col lg="10" className="home">
              {this.state.rows.length > 0 && (
                <Chart
                  chartType="LineChart"
                  rows={this.state.rows}
                  columns={this.state.columns}
                  options={this.state.options}
                  graph_id="LineChart"
                  width="100%"
                  height="400px"
                  chartEvents={this.chartEvents}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="footer">
              <Footer />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default Graph;
