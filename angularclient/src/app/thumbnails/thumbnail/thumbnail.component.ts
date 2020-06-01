import {Component, Input, OnInit} from '@angular/core';
import {Thumbnail} from "../thumbnail.model";

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
@Input() thumbnail: Thumbnail;
@Input() index: number;


  ngOnInit(): void {
  }

}
