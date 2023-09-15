import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

type FilmInfo = {
  // id: number;
  name: string;
  posterLink: string;
};

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  // private lastId = 0;
  private filmArray: FilmInfo[] = [
    {
      name: 'test',
      posterLink:
        'https://angular.io/assets/images/tutorials/faa/example-house.jpg',
    },
  ];
  constructor(private logger: LoggerService) {}

  getFilmArray() {
    return this.filmArray;
  }

  addFilm({ name, posterLink }: Omit<FilmInfo, 'id'>) {
    this.logger.log(`добавлен фильм "${name}"`);
    this.filmArray.push({
      // id: this.lastId++,
      name,
      posterLink,
    });
  }
  deleteFilm(name: string) {
    this.logger.log(`удалет фильм "${name}"`);
    // let index = this.filmArray.findIndex((film=>film.id ===id));
    let index = this.filmArray.findIndex((film) => film.name === name);
    if (index === -1) return;
    this.filmArray.splice(index, 1);
  }
}
