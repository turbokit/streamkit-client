import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  CPUStat,
  RAMStat,
  NetStat,
  DiscStat
} from '../../../providers/device-service';

@Component({
  selector: 'device-stat',
  templateUrl: 'stat.html'
})
export class StatComponent {
  @Input() public stats: any;
  @Input() public summaryViewLabels: Array<string>;
  @Input() public totalCallback: Function;

  public statLabels: Array<string>;
  public detailedView: string;
  public load: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detailedView = 'off';
    this.stats = this.navParams.data;
    this.statLabels = Object.keys(this.stats.entries.pop());

    console.log(this.totalCallback);
  }

}
