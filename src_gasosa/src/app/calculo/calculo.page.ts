import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { parse } from 'url';


@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage implements OnInit {

  constructor(public route:Router){}

voltar(){
    this.route.navigateByUrl('home');
   }

   preco=0;
   consumo=0;
   

}
