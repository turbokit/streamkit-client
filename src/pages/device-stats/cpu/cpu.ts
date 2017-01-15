import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CPUStat } from '../../../providers/device-service';

@Component({
  selector: 'page-cpu',
  templateUrl: 'cpu.html'
})
export class CpuPage {
  public stats: CPUStat;
  public statLabels: Array<string>;
  public detailedView: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detailedView = 'off';
    this.stats = this.navParams.data;
    this.statLabels = Object.keys(this.stats.entries.pop())
  }

}
