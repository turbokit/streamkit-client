import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RAMStat } from '../../../providers/device-service';

@Component({
  selector: 'page-ram',
  templateUrl: 'ram.html'
})
export class RamPage {
  public stats: RAMStat;
  public summaryViewLabels: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    this.summaryViewLabels = ['image', 'pid', 'commit'];
    this.stats = this.navParams.data;
  }

  getLoadingValue(): number {
    let entriesTotal: number = 0;

    this.stats.entries.forEach(statEntry => entriesTotal += statEntry.commit);

    return +(entriesTotal * 100 / this.stats.total).toFixed(2);
  }

}
