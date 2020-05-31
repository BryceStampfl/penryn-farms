import {Injectable} from "@angular/core";
import {Tile} from "./tile.model";


@Injectable({
  providedIn: 'root',
})
export class TileService {

  private tiles: Tile[] = [
    new Tile('John',
      'Holding a veggie',
      'assets/images/dad.jpg'),
    new Tile('Flowers',
      'View of the garden',
      'assets/images/flowers.jpg'),
    new Tile('Garden',
      'More flowers',
      'assets/images/garden.jpg'),
    new Tile('Pumpkins',
      'Baby pumpkins',
      'assets/images/green.jpg'),
    new Tile('Tomatoes',
      'Some big tomatoes',
      'assets/images/tomato.jpg'),
    new Tile('Veggies',
      'Baasket of Veggies',
      'assets/images/veggies.jpg')
  ];

  getTiles() {
    return this.tiles.slice();
  }

  constructor() {
  }

}
