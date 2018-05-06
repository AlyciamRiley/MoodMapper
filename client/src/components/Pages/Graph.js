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
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
      },
      rows: [
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7],
      ],
      columns: [
        {
          type: 'number',
          label: 'Age',
        },
        {
          type: 'number',
          label: 'Weight',
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        chartType="ScatterChart"
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