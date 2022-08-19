import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  private formulario : FormGroup;
  codigo
  nome
  valor 
  tipo 
  descricao
  
  constructor(
    public route: Router, 
    private formBuilder : FormBuilder,
    public alertController: AlertController, 
    private modal : ModalController
  ) {}

  ngOnInit() {
  }

  salvar(){
    let baixa = {codigo: this.codigo, nome: this.nome, valor: this.valor, tipo: this.tipo, descricao: this.descricao}
    console.log(baixa);
    this.modal.dismiss(baixa);
  }

}
