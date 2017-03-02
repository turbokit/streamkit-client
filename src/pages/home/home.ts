import { Component, OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
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
export class HomePage implements OnInit {
  public devices: Observable<Devices>;
  public deviceStatsPage: Component;

  constructor(
    private deviceService: DeviceService,
    public loadingCtrl: LoadingController
  ) { }

  public ngOnInit() {
    let loader = this.loadingCtrl.create({
      content: 'Loading',
    });

    loader.present()

    this.deviceStatsPage = DeviceStatsPage;
    this.devices = this.deviceService.getDevices();

    this.devices.subscribe(() => loader.dismiss());

  }
}
