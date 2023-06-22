import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingGalleryComponent } from './painting-gallery.component';

describe('PaintingGalleryComponent', () => {
  let component: PaintingGalleryComponent;
  let fixture: ComponentFixture<PaintingGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaintingGalleryComponent]
    });
    fixture = TestBed.createComponent(PaintingGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
