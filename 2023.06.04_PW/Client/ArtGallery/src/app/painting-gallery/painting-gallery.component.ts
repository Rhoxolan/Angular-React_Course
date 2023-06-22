import { Component, OnInit } from '@angular/core';
import { PaintingsService } from './paintings.service';
import { Painting } from './Painting';

@Component({
  selector: 'app-painting-gallery',
  templateUrl: './painting-gallery.component.html',
  styleUrls: ['./painting-gallery.component.css'],
  providers: [PaintingsService]
})
export class PaintingGalleryComponent implements OnInit {
  Paintings: Painting[];

  constructor(private paintingsService: PaintingsService) {
    this.Paintings = [];
  }

  getPaintingURL(id: number) {
    return this.paintingsService.getPaintingURL(id);
  }

  getPaintingThumbnailURL(id: number) {
    return this.paintingsService.getPaintingThumbnailURL(id);
  }

  ngOnInit(): void {
    this.paintingsService.getPaintings().subscribe({ next: data => this.Paintings = data, error: err => console.error(err) });
  }

}
