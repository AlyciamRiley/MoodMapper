import React,{Component} from "react";
import { Chart } from 'react-google-charts';
import Moment from "moment";
var axios = require("axios");

// import Moment from "react-moment";

// export default class Graph extends Component {
//   constructor (props) {
//     //makes sure component gets props from parent
//     //super--calls the constructor of the parent class
//     super(props)
//     this.state = {
//       chartdata : [['Day', 'Anxiety', 'Depression'], [1, 1, 1], [3, 6, 4]] 
//     }
//   }

//   //setState function to grab db data and pass to state
//   render () {
//     return (
//       <div className = {'graph-results'}>
//         <Chart
//         chartType = "ScatterChart"
//         data ={this.state.chartdata}
//         options = {{ }}
//         graph_id = "ScatterChart"
//         width = "100%"
//         height = "400px"
//         overflow = "auto"
//         //legend_toggle is prop that sets prop value to true
//         legend_toggle
//         />
//       </div>
//     );
//   }
// }


class Graph extends React.Component { 


  constructor(props) {
    super(props);
    
    this.chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
            // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
          console.log('Selected ', Chart.chart.getSelection());
        },
        
      },
    ];
 
    this.state = {
      options: {
        title: 'My Moods',
        titleFontSize: 25,
        hAxis: { title: 'Date', minValue: new Date("2018-05-01"), maxValue: new Date('2018-05-07')},
        vAxis: { title: 'Mood Range',minValue: 0, maxValue: 10 },        
        legend: "right",
        legendFontSize: 10,       
      },
      rows: [
        // return graphData.map((item, i)=> )
        //[Date, AnswerValue]
        // [new Date('2018-05-02'), 1,2,4,4,2],
        // [new Date('2018-05-04'), 2,4,4,5,5],
        // [new Date('2018-05-05'), 3,5,1,2,3],
        // // [4, 2],
        // [5, 5],
        // [6, 5],
      ],
      columns: [

        {
          // format: 'YYYY-MM-DD',
          type: 'date',
          label: 'Date',
        },
        {
          type: 'number',
          label: 'Anxiety',
        },
        {
          type: 'number',
          label: 'Depression',
        },
        {
          type: 'number',
          label: 'Concentration',
        },
        {
          type: 'number',
          label: 'Energy',
        },
        {
          type: 'number',
          label: 'Sleep',
        },
      ],
    };
  }

  GraphData(){   
    axios.get('/api/graph')
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


    
      // console.log(formattedDate);

      date.map(element => {
        return Moment(element).format("DD MM YYYY");
      })

      answers.forEach(element => {
        anxiety.push(element.anxiety);
        depression.push(element.depression);
        concentration.push(element.concentration);
        energy.push(element.energy);
        sleep.push(element.sleep);
        date.push(element.createdAt);
      });

      // for (var i = 0; i < date.length; i++){
      //   console.log("hi");
      // }

      date.forEach(element => {
        console.log("hi");
       const blah = Moment().format("DD MM YYYY");
       formattedDate.push(blah);
       console.log(blah);
        
      })

      console.log(formattedDate);


      console.log("Sleep", sleep);
      console.log("Anxiety", anxiety);
      console.log("Depression", depression);
      console.log("Energy", energy);
      console.log("Concentration", concentration);
      console.log("Date", date);
   this.setState({
        rows:[anxiety, depression, concentration, energy, sleep] 
        //for loop through formattedDate and apply the new Date constructor
      })
   
    })
    //this does return all the db info to the state. but need to first loop thru it before setting state.
    // .then(response => this.setState({graphData:response.data}));
  
  }

componentDidMount() {  this.GraphData(); 

}

  render() {
    return (
      //conditional rendering. only render chart if rows array has data
      <div>
      {this.state.rows.length > 0 &&
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
      }
      </div>
    );
  }
}
export default Graph;