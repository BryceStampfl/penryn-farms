import {Component, Input, OnInit} from '@angular/core';
import {Tile} from "../../tile.model";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
@Input() tile: Tile;
@Input() index: number;


  ngOnInit(): void {
  }



}
