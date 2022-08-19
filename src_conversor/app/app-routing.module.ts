import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'moedas', loadChildren: './moedas/moedas.module#MoedasPageModule' },
  { path: 'temperatura', loadChildren: './temperatura/temperatura.module#TemperaturaPageModule' },
  { path: 'peso', loadChildren: './peso/peso.module#PesoPageModule' },
  { path: 'distancia', loadChildren: './distancia/distancia.module#DistanciaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
