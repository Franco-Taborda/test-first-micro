import { NgModule } from '@angular/core';
import { UIModule } from 'ui/ui.module';

import { HolaTarolasDumbComponent } from './hola-tarolas-dumb.component';

@NgModule({
  imports: [UIModule],
  exports: [HolaTarolasDumbComponent],
  declarations: [HolaTarolasDumbComponent],
  providers: [],
})
export class HolaTarolasDumbModule {}
