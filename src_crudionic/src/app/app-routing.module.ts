import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'listar-produtos', loadChildren: './listar-produtos/listar-produtos.module#ListarProdutosPageModule' },
  { path: 'listarusuarios', loadChildren: './listarusuarios/listarusuarios.module#ListarusuariosPageModule' },
  { path: 'listar-clientes', loadChildren: './listar-clientes/listar-clientes.module#ListarClientesPageModule' },
  { path: 'listar-empresas', loadChildren: './listar-empresas/listar-empresas.module#ListarEmpresasPageModule' },
  { path: 'listar-vendas', loadChildren: './listar-vendas/listar-vendas.module#ListarVendasPageModule' },
  { path: 'cadastrousuario', loadChildren: './cadastrousuario/cadastrousuario.module#CadastrousuarioPageModule' },
  { path: 'cadastroproduto', loadChildren: './cadastroproduto/cadastroproduto.module#CadastroprodutoPageModule' },
  { path: 'cadastroclientes', loadChildren: './cadastroclientes/cadastroclientes.module#CadastroclientesPageModule' },
  { path: 'cadastroempresa', loadChildren: './cadastroempresa/cadastroempresa.module#CadastroempresaPageModule' },
  { path: 'cadastrovendas', loadChildren: './cadastrovendas/cadastrovendas.module#CadastrovendasPageModule' },
  { path: 'editarclientes', loadChildren: './editarclientes/editarclientes.module#EditarclientesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
