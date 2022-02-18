import { NgModule } from '@angular/core';
import { BlinkDirective } from './directives/blink.directive';
import { ElemRandomBGColorDirective } from './directives/elem-random-bg-color.directive';
import { ElementCounterDirective } from './directives/element-counter.directive';
import { FillPipe } from './pipes/fill.pipe';

@NgModule({
  imports: [],
  exports: [ElemRandomBGColorDirective, BlinkDirective, ElementCounterDirective, FillPipe],
  declarations: [ElemRandomBGColorDirective, BlinkDirective, ElementCounterDirective, FillPipe],
  providers: [],
})
export class SharedModule {}
