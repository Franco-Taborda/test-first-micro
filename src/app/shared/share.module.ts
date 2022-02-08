import { NgModule } from '@angular/core';
import { BlinkDirective } from './directives/blink.directive';
import { ElemRandomBGColorDirective } from './directives/elem-random-bg-color.directive';
import { FillPipe } from './pipes/fill.pipe';

@NgModule({
  imports: [],
  exports: [ElemRandomBGColorDirective, BlinkDirective, FillPipe],
  declarations: [ElemRandomBGColorDirective, BlinkDirective, FillPipe],
  providers: [],
})
export class SharedModule {}
