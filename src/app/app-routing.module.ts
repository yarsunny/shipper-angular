import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'beranda',
    loadChildren: () =>
      import('./beranda/beranda.module').then((m) => m.BerandaModule),
  },
  {
    path: 'driver-management',
    loadChildren: () =>
      import('./driver-management/driver-management.module').then(
        (m) => m.DriverManagementModule
      ),
  },
  {
    path: 'pickup',
    loadChildren: () =>
      import('./pickup/pickup.module').then((m) => m.PickupModule),
  },
  {
    path: '',
    redirectTo: 'beranda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
