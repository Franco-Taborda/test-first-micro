import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appElemRandomBGColor]' })
export class ElemRandomBGColorDirective {
  @Input() allOfType?: string;

  constructor(private element: ElementRef) {}

  @HostListener('click', ['$event']) onClick(event: any) {
    event.stopPropagation();
    this.setColor();
  }

  private setColor(): void {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    if (this.allOfType) {
      const queryResult = this.element.nativeElement.parentElement.querySelectorAll(`.${this.allOfType}`);
      queryResult.forEach((e: any) => (e.style.backgroundColor = randomColor));
    } else {
      this.element.nativeElement.style.backgroundColor = randomColor;
    }
  }
}
