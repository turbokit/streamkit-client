import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DeviceStatsPage, DeviceStatsComponents } from '../pages/device-stats/device-stats';

import { DeviceService } from '../providers/device-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DeviceStatsPage,
    DeviceStatsComponents
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DeviceStatsPage,
    DeviceStatsComponents
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DeviceService]
})
export class AppModule {}
