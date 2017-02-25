import { Component, OnInit } from '@angular/core';
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

  constructor(private deviceService: DeviceService) { }

  public ngOnInit() {
    this.deviceStatsPage = DeviceStatsPage;
    this.devices = this.deviceService.getDevices();
  }
}
