import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  clickCount = 0;
  constructor(){
    setInterval(()=>{
      this.clickCount = 0
    }, 1000);
  }
  onClick() {
    this.clickCount += 1;
  }
}
