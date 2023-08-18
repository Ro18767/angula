import { Component } from '@angular/core';

type Timeout =  ReturnType<typeof setTimeout>

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent {
  timeout: Timeout | null = null;
  roundingInPixels = 0;
  onMousemove(){
    if(this.timeout != null) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    
    this.roundingInPixels++;
    
    this.timeout = setTimeout(()=>{
      this.roundingInPixels = 0;
    }, 3000);
  }
}
