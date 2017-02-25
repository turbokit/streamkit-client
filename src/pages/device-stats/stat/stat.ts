import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { refreshRate } from '../../../providers/device-service';

@Component({
  selector: 'device-stat',
  templateUrl: 'stat.html'
})
export class StatComponent implements OnInit {
  @Input() public stats: any;
  @Input() public chartDataField: string;
  @Input() public summaryViewLabels: Array<string>;
  @Input() public lodingProperty: string;
  @Input() public lodingPropertyDimensions: string;

  public statLabels: Array<string>;
  public detailedView: string;

  public chartInstance: any;
  public chartOptions: any;
  public series: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ngOnInit() {
    this.chartDataField = 'cpu';
    this.statLabels = Object.keys(this.stats.entries.pop());
    this.detailedView = 'off';
    this.chartOptions = {
      title: {
        text: 'Test chart'
      },
      series: this.stats.entries.map(entry => {

        return {
          pid: entry.pid,
          name: entry.image,
          data: [ entry[this.chartDataField] ]
        }
      })
    }

    this.series = this.stats.entries.map(entry => ({
      pid: entry.pid,
      name: entry.image,
      data: [ entry[this.chartDataField] ]
    }));

    setInterval(() => console.log(this.updateChart()), refreshRate * 2);
  }

  private updateChart() {
    return Array.from(this.series)
      .map((series: any) => {
        const changes = this.stats.entries
          .find(entry => entry.pid === series.pid);

        if (series.data.length == 10) {
          series.data.shift();
        }

        console.log(series.data.length);

        series.data.push(changes[this.chartDataField]);
        return series;
      })
  }

  public bindChartInstance(instance) {
    this.chartInstance = instance;
  }

}
