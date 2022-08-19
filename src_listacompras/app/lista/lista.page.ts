import { Component, OnInit } from '@angular/core';
import { parse } from 'url';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

 total=0;

 calculo(e:any) {
   if(e["detail"].checked){
     this.total += parseFloat(e["detail"].value);
     console.log(this.total);
   }else{
     this.total -= parseFloat(e["detail"].value);
   }
  }

}
