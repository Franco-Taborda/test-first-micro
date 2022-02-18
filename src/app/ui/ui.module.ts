import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/share.module';
import { CardComponent } from './card/card.component';
import { GridPosterComponent } from './grid-poster/grid-poster.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [GridPosterComponent, CardComponent],
  declarations: [GridPosterComponent, CardComponent],
  providers: [],
})
export class UIModule {}
