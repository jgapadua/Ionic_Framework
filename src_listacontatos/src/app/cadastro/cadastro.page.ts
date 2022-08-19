import { Component,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
/*criar variavel para formulario*/

nome
telefone
constructor( private modal:ModalController){}

ngOnInit(){
}

salvar(){
  let contato = {nome: this.nome, telefone: this.telefone}
  this.modal.dismiss({contato});
   }
}
