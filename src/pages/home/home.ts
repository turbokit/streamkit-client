import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';

import { DeviceStatsPage } from '../device-stats/device-stats';
import {
  DeviceService,
  Devices
} from '../../providers/device-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public devices: Observable<Devices>;

  constructor(private deviceService: DeviceService, public navCtrl: NavController) {
    this.devices = this.deviceService.getDevices();
  }

  public open(device: any) {
    this.navCtrl.push(DeviceStatsPage, device);
  }

}
