import { Component } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private catalogService: CatalogService) {
    console.log(this.showName)
  }

  filmArray = this.catalogService.getFilmArray();
  showName = true;
  toggleName() {
    console.log(this.showName)
    this.showName = !this.showName;
  }
}
