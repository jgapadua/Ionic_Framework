import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-cadastroclientes',
  templateUrl: './cadastroclientes.page.html',
  styleUrls: ['./cadastroclientes.page.scss'],
})
export class CadastroclientesPage implements OnInit {
  nome
  telefone
  cep
  email
  dados:any=[]
  apiURL="http://localhost/crudionic/cadastrocliente.php";
    constructor(private http:HttpClient,private toasCtrl:ToastController,private modal:ModalController) { }
  
    ngOnInit() {
    }
  salvar(){
    this.dados={nome:this.nome,telefone:this.telefone,cep:this.cep,email:this.email};
    this.http.post(this.apiURL,JSON.stringify(this.dados)).subscribe((data)=>{
      this.modal.dismiss(this.dados);
    })
  }
  }
  