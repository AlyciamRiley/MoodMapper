import React,{Component} from "react";
import { Chart } from 'react-google-charts';

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
        hAxis: { title: 'Date', minValue: new Date("2018-05-01"), maxValue: new Date('2018-05-30')},
        vAxis: { title: 'Mood Range',minValue: 0, maxValue: 10 },
        legend: 'none',
      },
      rows: [
        //[Date, AnswerValue]
        [new Date('2018-05-01'),1],
        [new Date('2018-05-04'), 2],
        [new Date('2018-05-13'), 3],
        // [4, 2],
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
          label: 'Mood Range',
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        chartType="LineChart"
        rows={this.state.rows}
        columns={this.state.columns}
        options={this.state.options}
        graph_id="ScatterChart"
        width="100%"
        height="400px"
        chartEvents={this.chartEvents}
      />
    );
  }
}
export default Graph;