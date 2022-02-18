import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[appElementCounter]' })
export class ElementCounterDirective implements OnChanges {
  @Input() elementSelector: string;
  @Input() containerRef: ElementRef;

  constructor(private element: ElementRef) {}

  ngOnChanges(): void {
    const amount = this.containerRef?.nativeElement.querySelectorAll(this.elementSelector).length;
    this.element.nativeElement.textContent = `${amount}`;
  }
}
