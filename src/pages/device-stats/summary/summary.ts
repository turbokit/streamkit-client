import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeviceStats } from '../../../providers/device-service';

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html'
})
export class SummaryPage {
  public stats: DeviceStats;
  public statLabels: Array<string>;
  public summaryStatsViewLabels: { [key: string]: Array<string> };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stats = this.navParams.data;
    this.statLabels = Object.keys(this.stats);
    this.summaryStatsViewLabels = {
      cpu: ['image', 'pid', 'cpu'],
      ram: ['image', 'pid', 'commit'],
      disk: ['image', 'read', 'write'],
      net: ['image', 'recieve', 'send'],
    };
  }

}
