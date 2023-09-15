import { Component } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private catalogService: CatalogService) {}

  name = '';
  posterLink = '';
  add() {
    this.catalogService.addFilm({
      name: this.name,
      posterLink: this.posterLink,
    });
  }
}
