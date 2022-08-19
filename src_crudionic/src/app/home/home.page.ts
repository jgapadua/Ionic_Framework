import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private router:Router){
}

paginaProdutos(){
  this.router.navigateByUrl('listarProdutos');
}
paginaUsuarios(){
  this.router.navigateByUrl('listarUsuario');
}
paginaClientes(){
  this.router.navigateByUrl('listarClientes');
}
paginaEmpresas(){
  this.router.navigateByUrl('listarEmpresas');
}
paginaVendas(){
  this.router.navigateByUrl('listarVendas');
}


}
