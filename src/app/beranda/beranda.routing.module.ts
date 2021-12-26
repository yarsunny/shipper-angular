import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerandaComponent } from './beranda.component';

const routes: Routes = [
  {
    path: '',
    component: BerandaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerandaRoutingModule {}
