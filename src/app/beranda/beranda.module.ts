import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerandaComponent } from './beranda/beranda.component';
import { BerandaRoutingModule } from './beranda.routing.module';

@NgModule({
  declarations: [
    BerandaComponent
  ],
  imports: [
    CommonModule,
    BerandaRoutingModule
  ]
})
export class BerandaModule { }
