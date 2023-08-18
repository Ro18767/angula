import { Component } from '@angular/core';

@Component({
  selector: 'app-y-m-d-h-m-s',
  templateUrl: './y-m-d-h-m-s.component.html',
  styleUrls: ['./y-m-d-h-m-s.component.css'],
})
export class YMDHMSComponent {
  date = new Date();
  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
}
