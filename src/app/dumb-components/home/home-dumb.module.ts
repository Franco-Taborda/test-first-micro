import { NgModule } from '@angular/core';
import { HelloWorldDumbModule } from 'dumb/hello-world/hello-world-dumb.module';
import { HolaTarolasDumbModule } from 'dumb/hola-tarolas/hola-tarolas-dumb.module';
import { UIModule } from 'ui/ui.module';

import { HomeDumbComponent } from './home-dumb.component';

@NgModule({
  imports: [UIModule, HelloWorldDumbModule, HolaTarolasDumbModule],
  exports: [HomeDumbComponent],
  declarations: [HomeDumbComponent],
  providers: [],
})
export class HomeDumbModule {}
