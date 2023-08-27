import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-figures',
  templateUrl: './svg-figures.component.html',
  styleUrls: ['./svg-figures.component.css']
})
export class SvgFiguresComponent {
  fillColor = '#00A000';
  bgColor = '#0000A0';
  bgColor_changecount = 0;
  radius = 100;
  opacity = false;
  opacity_changecount = 0;
  handleWhell(event:WheelEvent){
    this.radius += event.deltaY / 10
  }
  handleDblClick(){
    this.opacity = !this.opacity;
    this.opacity_changecount += 1;
  }
  changeColor(event:Event) {
    event.preventDefault();
    let r = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
    let g = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
    let b = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
    this.bgColor = `#${r}${g}${b}`;
    this.bgColor_changecount += 1;
  }
}
