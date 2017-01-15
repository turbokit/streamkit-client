import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SummaryPage } from './summary/summary';
import { CpuPage } from './cpu/cpu';
import { RamPage } from './ram/ram';
import { DiskPage } from './disk/disk';
import { NetworkPage } from './network/network';

export const DeviceStatsComponents = [
  SummaryPage,
  CpuPage,
  RamPage,
  DiskPage,
  NetworkPage
];

@Component({
  selector: 'page-device-stats',
  templateUrl: 'device-stats.html'
})
export class DeviceStatsPage {
  public device: any;

  public summary: any;
  public cpu: any;
  public ram: any;
  public disk: any;
  public network: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.device = this.navParams.data;

    this.summary = SummaryPage;
    this.cpu = CpuPage;
    this.ram = RamPage;
    this.disk = DiskPage;
    this.network = NetworkPage;
  }

}
