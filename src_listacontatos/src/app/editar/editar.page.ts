import { Component,OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
/*criar variavel para formulario*/

nome
telefone
constructor( private modal:ModalController,private recebido:NavParams){}

ngOnInit(){
  this.nome=this.recebido.get('contato').nome;
  this.telefone=this.recebido.get('contato').telefone;
}

salvar(){
  let contato = {nome: this.nome, telefone: this.telefone}
  this.modal.dismiss({contato});
   }
}
