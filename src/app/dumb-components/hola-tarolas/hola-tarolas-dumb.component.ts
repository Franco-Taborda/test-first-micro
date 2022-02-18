import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { GridPosterComponent } from 'ui/grid-poster/grid-poster.component';

@Component({
  selector: 'app-hola-tarolas-dumb',
  templateUrl: './hola-tarolas-dumb.component.html',
})
export class HolaTarolasDumbComponent implements AfterViewInit {
  @ViewChild(GridPosterComponent, { read: ElementRef }) gridPoster: ElementRef;
  gridCoordinates = 'HOLA TAROLAS';
  gridPosterRef: ElementRef;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.gridPosterRef = this.gridPoster;
    this.changeDetectorRef.detectChanges();
  }
}
