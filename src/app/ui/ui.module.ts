import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/share.module';
import { GridPosterComponent } from './grid-poster/grid-poster.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [GridPosterComponent],
  declarations: [GridPosterComponent],
  providers: [],
})
export class UIModule {}
