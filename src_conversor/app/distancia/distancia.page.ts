import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-distancia',
  templateUrl: 'distancia.page.html',
  styleUrls: ['distancia.page.scss'],
})
 export class DistanciaPage implements OnInit {
  
  constructor(public route:Router){}
  ngOnInit() {
  }

  voltar(){
    this.route.navigateByUrl('/inicio');
   }
  // variaveis
  valorkm;
  metro = 1000;
  total;

  //funcao converter
  converter() {
    //console.log(this.valorkm);
    if(this.valorkm == undefined){
      alert("Favor preencher o campo!!!");
    }
    else{
      this.total = parseInt(this.valorkm)*(this.metro);
    } 
}
 }