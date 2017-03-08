import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-net',
  templateUrl: 'net.html'
})
export class NetPage implements OnInit {
  public dataStream: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.dataStream = this.navParams.get('dataStream');
  }
}
