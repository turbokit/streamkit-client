import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import * as io from 'socket.io-client';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform
      .ready()
      .then(() => {
        io('http://localhost:5000/test')
          .open()
          .on('my_response', data => console.log(data));

        StatusBar.backgroundColorByHexString('#387ef5');
        Splashscreen.hide();
      });
  }
}
