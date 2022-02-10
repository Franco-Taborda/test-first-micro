import { NgModule } from '@angular/core';
import { UIModule } from 'ui/ui.module';

import { HelloWorldDumbComponent } from './hello-world-dumb.component';

@NgModule({
  imports: [UIModule],
  exports: [HelloWorldDumbComponent],
  declarations: [HelloWorldDumbComponent],
  providers: [],
})
export class HelloWorldDumbModule {}
