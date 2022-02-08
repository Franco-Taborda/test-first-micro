import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  RendererStyleFlags2,
  SimpleChanges,
} from '@angular/core';
import { SHAPES_COORDINATES } from './enums/letters.enum';
// import { Coordinate, IGridsPoster } from './models/grid.interface';

@Component({
  selector: 'app-grid-poster',
  templateUrl: './grid-poster.component.html',
  styleUrls: ['./grid-poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridPosterComponent implements OnInit, OnChanges {
  @Input() coordinatesSequence: string;
  @Input() lineMaxChar = 16;
  @Input() unitLength = '0.6vw';

  gridsPoster: string[][];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    const dashCase = RendererStyleFlags2.DashCase;
    this.renderer.setStyle(this.elementRef.nativeElement, '--unit-length', this.unitLength, dashCase);
    this.renderer.setStyle(this.elementRef.nativeElement, '--grids-quantity', this.lineMaxChar, dashCase);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['coordinatesSequence'];
    if (change?.currentValue) {
      this.populateGridPoster(change.currentValue);
    }
  }

  private populateGridPoster(coordSequence: string): void {
    const posterLines = coordSequence.split('\n');
    let populatedPoster: string[][] = [];

    posterLines.forEach((line, index) => {
      line.split('').forEach((coordinate) => {
        populatedPoster.push(SHAPES_COORDINATES[coordinate as keyof typeof SHAPES_COORDINATES]);
      });

      // If remaining space in the line, we fill it with empty grids
      if (this.lineMaxChar >= line.length) {
        populatedPoster = populatedPoster.concat(new Array(this.lineMaxChar - line.length).fill(null));
      } else if (index !== posterLines.length - 1) {
        // If sequence's length is bigger than line's length AND it's not the last line, we fill it as well
        populatedPoster = populatedPoster.concat(
          new Array(this.lineMaxChar - (line.length % this.lineMaxChar)).fill(null),
        );
      }
    });

    this.gridsPoster = populatedPoster;
  }
}
