import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /* para navegação o IONIC4 utiliza o objeto ROUTER*/
  /* metodo constructor é carregado no inicio da pagina*/
  constructor(public router: Router){}
  
  abrirPagina(){ 
   this.router.navigateByUrl('sembebida');
  }

  abrirPagina2(){
   this.router.navigateByUrl('combebida');
  }

}
