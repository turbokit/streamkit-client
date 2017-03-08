import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs';

import { SplineChartComponent } from '../../spline-chart/spline-chart';

@Component({
  selector: 'statistic-stat',
  templateUrl: `statistic-stat.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticStatComponent implements OnDestroy, OnInit {
  @ViewChild('streamChart')
  public streamChartRef: ComponentRef<SplineChartComponent>;

  @ViewChild('recognitionChart')
  public recognitionChartRef: ComponentRef<SplineChartComponent>;

  @Input('dataStream') private dataStream: Observable<any>;

  public stream: Observable<any>;
  public recognition: Observable<any>;

  constructor() { }

  private filterDevices(group) {
    return device => device.taskGroup === group;
  }

  // private destroyCharts() {
  //   if (this.streamChartRef != null && this.recognitionChartRef != null) {
  //     this.streamChartRef.destroy();
  //     this.recognitionChartRef.destroy();
  //   }
  // }

  public ngOnInit() {
    this.stream = this.dataStream.map(devices => devices
      .filter(this.filterDevices('Stream')));

    this.recognition = this.dataStream.map(devices => devices
      .filter(this.filterDevices('Recognition')));
  }

  public ngOnDestroy() {
    // this.destroyCharts();
  }

  public ionViewWillLeave() {
    console.log('Leaved')
  }

}
