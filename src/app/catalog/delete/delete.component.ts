import { Component } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {
  constructor(private catalogService: CatalogService) {}
  name = '';
  delete() {
    this.catalogService.deleteFilm(this.name);
  }
}
