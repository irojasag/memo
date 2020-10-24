import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
