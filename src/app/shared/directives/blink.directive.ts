import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: '[appBlink]' })
export class BlinkDirective {
  @HostBinding('class.blink') blink = false;

  @HostListener('mouseover') onMouseOver() {
    this.blink = !this.blink;
  }
}
