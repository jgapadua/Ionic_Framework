import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-peso',
  templateUrl: 'peso.page.html',
  styleUrls: ['peso.page.scss'],
})
 export class PesoPage implements OnInit {
  
  constructor(public route:Router){}
  ngOnInit() {
  }

  voltar(){
    this.route.navigateByUrl('/inicio');
   }
  // variaveis
  valorkg;
  quilo = 1000;
  total;

  //funcao converter
  converter() {
    //console.log(this.valorkm);
    if(this.valorkg == undefined){
      alert("Favor preencher o campo!!!");
    }
    else{
      this.total = parseInt(this.valorkg)*(this.quilo);
    } 
}
 }