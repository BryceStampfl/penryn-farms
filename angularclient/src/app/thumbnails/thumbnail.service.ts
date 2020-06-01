import { Injectable } from '@angular/core';
import {Thumbnail} from "./thumbnail.model";

@Injectable({
  providedIn: 'root'
})
export class ThumbnailService {
private thumbnails: Thumbnail[] = [
  new Thumbnail('John','John holding up a bannana','assets/images/john.jpg'),
  new Thumbnail('Flowers','','assets/images/flowers.jpg'),
  new Thumbnail('Garden','','assets/images/garden.jpg'),
  new Thumbnail('Green','','assets/images/green.jpg'),
  new Thumbnail('Tomato','','assets/images/tomato.jpg'),
  new Thumbnail('Veggies','','assets/images/veggies.jpg')
];

  constructor() {
  }

  getThumbnails(){
    return this.thumbnails.slice();
  }
}
