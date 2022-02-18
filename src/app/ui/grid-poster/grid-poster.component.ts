import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  RendererStyleFlags2,
  SimpleChanges,
} from '@angular/core';
import { SHAPES_COORDINATES } from './enums/letters.enum';

@Component({
  selector: 'app-grid-poster',
  templateUrl: './grid-poster.component.html',
  styleUrls: ['./grid-poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridPosterComponent implements OnChanges, OnInit, AfterContentInit {
  @ContentChild('input', { read: ElementRef }) contentChildRef: ElementRef;
  @Input() coordinatesSequence: string;
  @Input() lineMaxChar = 16;
  @Input() unitLength = '0.6vw';
  @Input() dynamicBG = true;

  gridsPoster: string[][];
  unitAmount = 0;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['coordinatesSequence'];

    if (change.previousValue !== change.currentValue) {
      this.populateGridPoster(change.currentValue);
      this.setUnitsAmount();
    }
  }

  ngOnInit(): void {
    const dashCase = RendererStyleFlags2.DashCase;
    this.renderer.setStyle(this.elementRef.nativeElement, '--unit-length', this.unitLength, dashCase);
    this.renderer.setStyle(this.elementRef.nativeElement, '--grids-quantity', this.lineMaxChar, dashCase);
  }

  ngAfterContentInit(): void {
    if (this.contentChildRef) {
      // this.renderer.addClass(this.contentChildRef.nativeElement, 'message');
      this.renderer.setStyle(this.contentChildRef.nativeElement, 'border', '2px dotted brown');
    }
  }

  private setUnitsAmount(): void {
    this.unitAmount = this.gridsPoster?.reduce((prev, currArr) => prev + (currArr?.length || 0), 0);
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
