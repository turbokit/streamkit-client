import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SummaryPage } from './summary/summary';
import { CpuPage } from './cpu/cpu';
import { RamPage } from './ram/ram';
import { DiscPage } from './disc/disc';
import { NetworkPage } from './network/network';

export const DeviceStatsComponents = [
  SummaryPage,
  CpuPage,
  RamPage,
  DiscPage,
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
  public disc: any;
  public network: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.device = this.navParams.data;

    this.summary = SummaryPage;
    this.cpu = CpuPage;
    this.ram = RamPage;
    this.disc = DiscPage;
    this.network = NetworkPage;
  }

}
