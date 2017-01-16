import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'device-stat',
  templateUrl: 'stat.html'
})
export class StatComponent implements OnInit {
  @Input() public stats: any;
  @Input() public summaryViewLabels: Array<string>;
  @Input() public lodingProperty: string;
  @Input() public lodingPropertyDimensions: string;

  public statLabels: Array<string>;
  public detailedView: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detailedView = 'off';
  }

  ngOnInit() {
    this.statLabels = Object.keys(this.stats.entries.pop());
  }

}
