
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-moedas',
  templateUrl: 'moedas.page.html',
  styleUrls: ['moedas.page.scss'],
})
 export class MoedasPage implements OnInit {
  
  constructor(public route:Router){}
  ngOnInit() {
  }

  voltar(){
    this.route.navigateByUrl('/inicio');
   }
  // variaveis
  valorreal;
  dolar = 0.26;
  euro = 0.23;
  iene = 29.14;
  total;

  //funcao para todos as conversoes
  calculo(conversao:string){
    if(this.valorreal===undefined){
      alert("Favor preencher o campo!!!");
      this.valorreal=undefined;
      
    }else{
      switch(conversao){
        case 'dolar':
        this.total=parseFloat(this.valorreal)*(this.dolar);
        break;
        case'euro':
        this.total=parseFloat(this.valorreal)*(this.euro);
        break;
        case 'iene':
        this.total=parseFloat(this.valorreal)*(this.iene);
        break;
        }
        }
     
       
      }
    }
  


