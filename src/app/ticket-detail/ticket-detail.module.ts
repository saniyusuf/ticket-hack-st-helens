import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TicketDetailPage } from './ticket-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TicketDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [TicketDetailPage],
  declarations: [TicketDetailPage]
})
export class TicketDetailPageModule {}
