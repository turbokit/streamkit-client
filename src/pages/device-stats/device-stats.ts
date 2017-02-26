import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Device, DeviceService } from '../../providers/device-service';

import { CpuPage } from './cpu/cpu';
import { DiskPage } from './disk/disk';
import { NetworkPage } from './network/network';
import { RamPage } from './ram/ram';
import { SummaryPage } from './summary/summary';
import { StatComponent } from './stat/stat';

export const DeviceStatsComponents = [
  CpuPage,
  DiskPage,
  NetworkPage,
  RamPage,
  SummaryPage,
  StatComponent
];

@Component({
  selector: 'page-device-stats',
  templateUrl: 'device-stats.html'
})
export class DeviceStatsPage implements OnInit {
  public device: Device;
  public tasks: any;

  public summary: any;
  public cpu: any;
  public ram: any;
  public disk: any;
  public network: any;

  constructor(
    public deviceService: DeviceService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.summary = SummaryPage;
    this.cpu = CpuPage;
    this.ram = RamPage;
    this.disk = DiskPage;
    this.network = NetworkPage;

    this.tasks = null;
    this.device = null;
  }

  public ngOnInit() {
    this.device = this.navParams.get('device');

    let { cpu, ram, disk, net } = this.device.stats;

    this.tasks = {
      summary: [
        cpu.entries.length,
        ram.entries.length,
        disk.entries.length,
        net.entries.length
      ].reduce((sum: number, stat: number) => sum + (stat - 1)) - 1,
      cpu: cpu.entries.length - 1,
      ram: ram.entries.length - 1,
      disk: disk.entries.length - 1,
      net: net.entries.length - 1
    }
  }

  ionViewDidLeave() {
    console.log('DeviceStatsPage leaved')
    this.tasks = null;
    this.device = null;
  }

}
