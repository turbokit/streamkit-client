import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NetStat } from '../../../providers/device-service';

@Component({
  selector: 'page-network',
  templateUrl: 'network.html'
})
export class NetworkPage {
  public stats: NetStat;
  public summaryViewLabels: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    this.summaryViewLabels = ['image', 'recieve', 'send'];
    this.stats = this.navParams.data;
  }

}
