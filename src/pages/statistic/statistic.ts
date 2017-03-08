import {
  Component,
  OnInit
} from '@angular/core';
import {
  LoadingController,
  NavController,
  NavParams
} from 'ionic-angular';

import { DeviceService } from '../../providers/device-service';

import { StatisticStatComponent } from './statistic-stat/statistic-stat';
import { NetPage } from './net/net';
import { CpuPage } from './cpu/cpu';
import { DiskPage } from './disk/disk';
import { RamPage } from './ram/ram';

interface TabConfig {
  root: Component;
  data: any;
  icon: string;
  title: string;
}

export const StatisticComponents: Array<Component> = [
  StatisticStatComponent,
  NetPage,
  CpuPage,
  DiskPage,
  RamPage
];

@Component({
  selector: 'page-statistic',
  templateUrl: 'statistic.html'
})
export class StatisticPage implements OnInit {
  public statTabs: Array<TabConfig>;

  constructor(
    private deviceService: DeviceService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.statTabs = [];
  }

  public ngOnInit() {
    this.statTabs = [
      {
        root: CpuPage,
        data: {
          dataStream: this.deviceService.getStat('cpu', 'total')
        },
        icon: 'clock',
        title: 'CPU'
      },
      {
        root: RamPage,
        data: {
          dataStream: this.deviceService.getStat('ram', 'total')
        },
        icon: 'cog',
        title: 'RAM'
      },
      {
        root: DiskPage,
        data: {
          dataStream: this.deviceService.getStat('disk', 'averageSpeed')
        },
        icon: 'disc',
        title: 'Disk'
      },
      {
        root: NetPage,
        data: {
          dataStream: this.deviceService.getStat('net', 'total')
        },
        icon: 'globe',
        title: 'Network'
      }
    ]
  }
}
