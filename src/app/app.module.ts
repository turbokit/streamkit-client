import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeviceStatsPage, DeviceStatsComponents } from '../pages/device-stats/device-stats';
import { StatisticPage, StatisticComponents } from '../pages/statistic/statistic';
import { SplineChartComponent } from '../pages/spline-chart/spline-chart';

import { DeviceService } from '../providers/device-service';

import { TitleCasePipe } from '../pipes/title-case';

export function highchartsStaticFactory() {
  return require('highcharts');
}

export const HighchartsStaticProvider = {
  provide: HighchartsStatic,
  useFactory: highchartsStaticFactory
};

export const IonicErrorHandlerProvider = {
  provide: ErrorHandler,
  useClass: IonicErrorHandler
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DeviceStatsPage,
    DeviceStatsComponents,
    StatisticPage,
    StatisticComponents,
    SplineChartComponent,
    TitleCasePipe
  ],
  imports: [
    ChartModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DeviceStatsPage,
    DeviceStatsComponents,
    StatisticPage,
    StatisticComponents,
    SplineChartComponent
  ],
  providers: [
    DeviceService,
    IonicErrorHandlerProvider,
    HighchartsStaticProvider
  ]
})
export class AppModule {}
