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
    this.statLabels = Object.keys(this.stats.entries.pop());
    this.detailedView = 'off';
    this.chartOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: this.chartDataField.toUpperCase()
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      plotOptions: {
        spline: {
          marker: {
            enabled: false
          }
        }
      },
      series: this.stats.entries.map(entry => ({
        name: entry.pid,
        data: [
          {
            x: new Date().getTime(),
            y: entry[this.chartDataField]
          }
        ]
      }))
    }

    setInterval(
      () => this.updateSeries(this.chartInstance.series),
      refreshRate);
  }

  private updateSeries(series) {
    Array
      .from(series)
      .map((series: any) => {
        const changes = this.stats.entries
          .find(entry => entry.pid === series.name);
        const x = new Date().getTime();
        const y = changes[this.chartDataField];

        series.data.length == 10
          ? series.addPoint([ x, y ], false, true)
          : series.addPoint([ x, y ]);

        return series;
      });

    this.chartInstance.redraw();
  }

  public bindChartInstance(instance) {
    this.chartInstance = instance;
  }

}
