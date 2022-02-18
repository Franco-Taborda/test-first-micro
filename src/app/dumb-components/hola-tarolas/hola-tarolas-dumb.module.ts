import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/share.module';
import { UIModule } from 'ui/ui.module';

import { HolaTarolasDumbComponent } from './hola-tarolas-dumb.component';

@NgModule({
  imports: [CommonModule, FormsModule, UIModule, SharedModule],
  exports: [HolaTarolasDumbComponent],
  declarations: [HolaTarolasDumbComponent],
  providers: [],
})
export class HolaTarolasDumbModule {}
