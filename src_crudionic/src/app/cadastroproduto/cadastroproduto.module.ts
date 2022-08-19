import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroprodutoPage } from './cadastroproduto.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroprodutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroprodutoPage]
})
export class CadastroprodutoPageModule {}
