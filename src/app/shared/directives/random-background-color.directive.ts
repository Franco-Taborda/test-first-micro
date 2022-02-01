import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appRandomBackgroundColor]' })
export class RandomBGColorDirective {
  @Input() bgColor?: string;

  constructor(private element: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.setColor(this.bgColor);
  }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.removeColor();
  // }

  private setColor(color?: string): void {
    this.element.nativeElement.style.backgroundColor = color
      ? color
      : `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  // private removeColor(): void {
  //   this.element.nativeElement.style.backgroundColor = '';
  // }
}
