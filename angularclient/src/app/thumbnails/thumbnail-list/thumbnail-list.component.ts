import { Component, OnInit } from '@angular/core';
import {Thumbnail} from "../thumbnail.model";
import {ThumbnailService} from "../thumbnail.service";

@Component({
  selector: 'app-thumbnail-list',
  templateUrl: './thumbnail-list.component.html',
  styleUrls: ['./thumbnail-list.component.css']
})
export class ThumbnailListComponent implements OnInit {
   thumbnails: Thumbnail[];

  constructor(private thumbnailService: ThumbnailService) {
    this.thumbnails = thumbnailService.getThumbnails();
  }

  ngOnInit(): void {
  }

}
