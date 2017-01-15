import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DeviceStatsPage } from '../device-stats/device-stats';
import { DeviceService } from '../../providers/device-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public devices: Array<any>;

  constructor(private deviceService: DeviceService, public navCtrl: NavController) {
    this.deviceService.getDevices().subscribe(data => console.log(data));

    this.devices = [
      {
        id: 1,
        load: 22,
        taskGroup: 'Recognition',
        stats: [
          {
            process: 'process',
            id: 324486,
            sended: 3243443,
            retrieved: 9875,
            total: 3243443 + 9875
          },
          {
            process: 'imgwizard',
            id: 8975,
            sended: 49889,
            retrieved: 789,
            total: 49889 + 789
          }
        ]
      },
      {
        id: 2,
        load: 48,
        taskGroup: 'Recognition',
        stats: [
          {
            process: 'karma.proc',
            id: 324486,
            sended: 3243443,
            retrieved: 9875,
            total: 3243443 + 9875
          },
          {
            process: 'stuff.proc',
            id: 8975,
            sended: 49889,
            retrieved: 789,
            total: 49889 + 789
          }
        ]
      },
      {
        id: 15,
        load: 96,
        taskGroup: 'Streaming',
        stats: [
          {
            process: 'prune.xx',
            id: 324486,
            sended: 3243443,
            retrieved: 9875,
            total: 3243443 + 9875
          },
          {
            process: 'tramp.dot',
            id: 8975,
            sended: 49889,
            retrieved: 789,
            total: 49889 + 789
          }
        ]
      },
      {
        id: 98,
        load: 15,
        taskGroup: 'Streaming'
      }
    ]
  }

  public open(device: any) {
    this.navCtrl.push(DeviceStatsPage, device);
  }

}
