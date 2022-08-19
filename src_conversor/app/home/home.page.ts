import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// para navegação o IONIC4 utiliza o objeyo ROUTER
// metodo constructor é carregado no inicio da pagina
constructor(public route:Router){}

abrirPagina(){
  this.route.navigateByUrl('/inicio');
 }

}