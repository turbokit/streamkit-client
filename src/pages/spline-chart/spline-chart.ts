import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { DeviceService } from '../../providers/device-service';

@Component({
  selector: 'spline-chart',
  templateUrl: 'spline-chart.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplineChartComponent implements OnDestroy, OnInit {
  @Input('dataStream') public dataStream: Observable<any>;
  @Input('data') public data: Array<any>;

  @Input('axisType') public axisType: string = 'datetime';
  @Input('axisInterval') public axisInterval: number = 150;
  @Input('title') public title: string;

  private subsription: Subscription;
  public chartInstance: any;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'spline'
      },
      title: {
        text: this.title
      },
      xAxis: {
        type: this.axisType,
        tickPixelInterval: this.axisInterval
      },
      yAxis: {
        title: {
          text: null
        }
      },
      plotOptions: {
        spline: {
          marker: {
            symbol: 'circle'
          }
        }
      },
      series: this.data || []
    };
  }

  public ngOnInit() {
    if (this.dataStream == null && this.data == null) {
      throw new Error('Data for chart not specified');
    }

    this.subsription = this.dataStream.subscribe(data => {
      data.forEach(entry => {
        const series = this.chartInstance.series.find(series => series.name == entry.id);
        const x = new Date().getTime();
        const y = entry.statLoad

        if (series == null) {
          this.chartInstance.addSeries({
            name: entry.id,
            data: [{ x, y }]
          }, false, true);
        } else {
          series.data.length == 10
            ? series.addPoint([ x, y ], false, true)
            : series.addPoint([ x, y ]);

          return series;
        }
      })

      this.chartInstance.redraw();
    });
  }

  public ngOnDestroy() {
    this.dataStream != null && this.subsription.unsubscribe();
    delete this.chartInstance;
  }

  public bindChartInstance(chartInstance) {
    this.chartInstance = chartInstance;
  }

}
