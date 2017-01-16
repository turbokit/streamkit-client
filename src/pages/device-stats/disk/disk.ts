import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DiskStat } from '../../../providers/device-service';

@Component({
  selector: 'page-disk',
  templateUrl: 'disk.html'
})
export class DiskPage {
  public stats: DiskStat;
  public summaryViewLabels: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    this.summaryViewLabels = ['image', 'read', 'write'];
    this.stats = this.navParams.data;
  }



}
