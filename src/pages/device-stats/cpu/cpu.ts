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
  public summaryViewLabels: Array<string>;
  public detailedView: string;
  public load: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detailedView = 'off';
    this.stats = this.navParams.data;
    this.statLabels = Object.keys(this.stats.entries.pop());
    this.summaryViewLabels = ['image', 'pid', 'cpu'];

  }

  public getTotalCpu() {
    return function() {
      let entriesCpuTotal: number = 0;
      for (let i = 0; i < this.stats.entries.length; i++) {
        entriesCpuTotal += this.stats.entries[i].cpu;
      }
      return +(entriesCpuTotal * 100 / this.stats.total).toFixed(2);
    }
  }

}
