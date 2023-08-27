import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent {
  bg_black = false;
  text_color = '#808080';
  changeColor() {
    let r = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
    let g = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
    let b = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, '0');
    this.text_color = `#${r}${g}${b}`;
  }
  changeBackground() {
    this.bg_black = !this.bg_black;
  }
}