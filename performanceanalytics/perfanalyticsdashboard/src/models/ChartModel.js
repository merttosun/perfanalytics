export default class ChartDataModel {
  constructor(config) {
    this.labels = [];
    this.datasets = [
      {
        label: config.label,
        fill: config.fill,
        lineTension: 0.1,
        backgroundColor: config.bgColor,
        borderColor: config.bgColor,
        borderCapStyle: "butt",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBackgroundColor: config.bgColor,
        pointBorderColor: config.bgColor,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "red",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
    ];
  }
}
