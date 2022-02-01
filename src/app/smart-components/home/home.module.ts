import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeDumbComponent } from 'dumb/home/home-dumb.component';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { SharedModule } from 'src/app/shared/share.module';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(HOME_ROUTES)],
  exports: [HomeComponent],
  declarations: [HomeComponent, HomeDumbComponent],
  providers: [],
})
export class HomeModule {}