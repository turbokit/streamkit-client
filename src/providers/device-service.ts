import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

interface StatEntry {
  image: string;
  pid  : number;
}

export interface CPUStatEntry extends StatEntry {
  average    : number;
  cpu        : number;
  cycle      : number;
  description: string;
  elevated   : boolean;
  status     : string;
  version    : string;
}

export interface RAMStatEntry extends StatEntry {
  commit    : number;
  errors    : number;
  shareable : number;
  workingSet: number;
}

export interface NetStatEntry extends StatEntry {
  recieve: number;
  send   : number;
}

export interface DiscStatEntry extends StatEntry {
  file    : string;
  priority: string;
  read    : number;
  response: 722
  write   : number;
}

export interface CPUStat {
  total: number;
  entries: Array<CPUStatEntry>;
}
export interface RAMStat {
  total: number;
  entries: Array<RAMStatEntry>;
}
export interface NetStat {
  entries: Array<NetStatEntry>;
}
export interface DiscStat {
  avarageSpeed: number;
  avarageSpeedDimensions: string;
  entries: Array<DiscStatEntry>;
}

export interface DeviceStats {
  cpu : CPUStat;
  ram : RAMStat;
  net : NetStat;
  disc: DiscStat
};

export interface Device {
  id       : number;
  load     : number;
  stats    : DeviceStats;
  taskGroup: string;
}

export type Devices = Array<Device>;

@Injectable()
export class DeviceService {

  constructor(public http: Http) { }

  public getDevices(): Observable<Devices> {
    return this.http
      .get('https://gist.githubusercontent.com/embarq/573ecfd8b3fb2c3679b4eb8f9a577889/raw/cdd80c6118706344cada156611588b51932b2a75/devices.mock.json')
      .map((res: Response) => res.json())
  }

}
