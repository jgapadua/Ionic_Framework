import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-temperatura',
  templateUrl: 'temperatura.page.html',
  styleUrls: ['temperatura.page.scss'],
})
 export class TemperaturaPage implements OnInit {
  
  constructor(public route:Router){}
  ngOnInit() {
  }

  voltar(){
    this.route.navigateByUrl('/inicio');
   }
  // variaveis
  valorcelsius;
  fahrenheit = 33.8;
  total;

  //funcao converter
  converter() {
    //console.log(this.valorkm);
    if(this.valorcelsius == undefined){
      alert("Favor preencher o campo!!!");
    }
    else{
      this.total = parseFloat(this.valorcelsius)*(this.fahrenheit);
    } 
}
 }