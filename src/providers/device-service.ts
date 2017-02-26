import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Device } from './device.model';

export * from './device.model';

function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const refreshRate = 700;

@Injectable()
export class DeviceService {
  public connection: SocketIOClient.Socket;

  constructor(public http: Http) {
    // this.connection = io('http://localhost:8102').open()
  }

  public getDevices(): Observable<any> {
    return this.http
      .get('https://gist.githubusercontent.com/embarq/573ecfd8b3fb2c3679b4eb8f9a577889/raw/7e2ee9ff1d5334a81ae5525043d72af8acd2cecc/devices.mock.json')
      .map(res => res.json())
      .switchMap(rawDevices => Observable.create(observer => {
        let devices = () => rawDevices.map((device: Device) => {
          device.load = getRandomInt(0, 100);
          device.stats.cpu.entries = device.stats.cpu.entries.map(entry => {
            entry.cpu = getRandomInt(0, 100);
            entry.average = getRandomInt(0, 100);
            entry.cycle = getRandomInt(0, 100);
            return entry;
          });
          device.stats.cpu.total = device.stats.cpu.entries
            .reduce((sum, curr) => sum + curr.cpu, 0);

          device.stats.ram.entries = device.stats.ram.entries.map(entry => {
            entry.errors = getRandomInt(0, 100);
            entry.commit = getRandomInt(0, 1600);
            entry.workingSet = getRandomInt(1000, 1600);
            entry.shareable = getRandomInt(0, 1600);
            return entry;
          });
          device.stats.ram.total = device.stats.ram.entries
            .reduce((sum, curr) => sum + curr.commit, 0);

          device.stats.net.entries = device.stats.net.entries.map(entry => {
            entry.send = getRandomInt(0, 2000);
            entry.recieve = getRandomInt(0, 2000);
            return entry;
          });

          device.stats.disk.entries = device.stats.disk.entries.map(entry => {
            entry.read = +getRandomArbitrary(0, 2600).toFixed(2);
            entry.write = +getRandomArbitrary(0, 2600).toFixed(2);
            entry.response = getRandomInt(0, 1000);
            return entry;
          });
          device.stats.disk.averageSpeed = device.stats.disk.entries
            .reduce((sum, curr) => sum + Math.abs(curr.read - curr.write), 0);
          device.stats.disk.averageSpeed = device.stats.disk.averageSpeed / device.stats.disk.entries.length;

          return device;
        });

        const intervalId = setInterval(() => observer.next(devices()), refreshRate);
        return () => clearInterval(intervalId);
      }))
  }

  public getDevice(): Observable<any> {
    return Observable.interval(1000);
    // return Observable.fromEvent(this.connection, 'dev');
    // return new Observable(observer => {
    //   this.connection.on('dev', data => observer.next(data));
    //   return () => console.log('Disposed');
    // });
  }

}
