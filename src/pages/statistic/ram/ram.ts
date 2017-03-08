import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-ram',
  templateUrl: 'ram.html'
})
export class RamPage implements OnInit {
  public dataStream: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.dataStream = this.navParams.get('dataStream');
  }
}
