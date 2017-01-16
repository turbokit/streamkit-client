import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CPUStat } from '../../../providers/device-service';

@Component({
  selector: 'page-cpu',
  templateUrl: 'cpu.html'
})
export class CpuPage implements OnInit {
  public stats: CPUStat;
  public summaryViewLabels: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    this.summaryViewLabels = ['image', 'pid', 'cpu'];
    this.stats = this.navParams.data;
  }

  getLoadingValue(): number {
    let entriesTotal: number = 0;

    this.stats.entries.forEach(statEntry => entriesTotal += statEntry.cpu);

    return +(entriesTotal * 100 / this.stats.total).toFixed(2);
  }

}
