import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(public route:Router){}
  ngOnInit(){
    
  }
  abrirMoedas(){
    this.route.navigateByUrl('/moedas');
   }
   abrirTemperatura(){
    this.route.navigateByUrl('/temperatura');
   }
   abrirPeso(){
    this.route.navigateByUrl('/peso');
   }
   abrirDistancia(){
    this.route.navigateByUrl('/distancia');
  }
}
