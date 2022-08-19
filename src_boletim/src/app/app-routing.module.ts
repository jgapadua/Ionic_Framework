import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'professor', loadChildren: './professor/professor.module#ProfessorPageModule' },
  { path: 'cadastrar-professor', loadChildren: './cadastrar-professor/cadastrar-professor.module#CadastrarProfessorPageModule' },
  { path: 'selecionar-professor', loadChildren: './selecionar-professor/selecionar-professor.module#SelecionarProfessorPageModule' },
  { path: 'editar-professor', loadChildren: './editar-professor/editar-professor.module#EditarProfessorPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
