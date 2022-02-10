import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
import { SharedModule } from 'src/app/shared/share.module';
import { HomeDumbModule } from 'dumb/home/home-dumb.module';

@NgModule({
  imports: [CommonModule, SharedModule, HomeDumbModule, RouterModule.forChild(HOME_ROUTES)],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
