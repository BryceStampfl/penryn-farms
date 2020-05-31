import {Component, OnInit} from '@angular/core';
import {Tile} from "../tile.model";
import {TileService} from "../tile.service";

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.css']
})
export class TileListComponent implements OnInit {
  tiles: Tile[];

  constructor(private tileService: TileService) {
  }

  ngOnInit(): void {
    this.tiles = this.tileService.getTiles();
  }

}
