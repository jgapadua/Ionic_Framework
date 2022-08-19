import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.page.html',
  styleUrls: ['./cadastrar-professor.page.scss'],
})
export class CadastrarProfessorPage implements OnInit {
  nome
  login
  senha
  dados:any=[]
  apiURL="http://localhost/app_boletim/inserirprofessor.php";
    constructor(private http:HttpClient,private toasCtrl:ToastController,private modal:ModalController) { }
  
    ngOnInit() {
    }
  salvar(){
    this.dados={nome:this.nome,login:this.login,senha:this.senha};
    this.http.post(this.apiURL,JSON.stringify(this.dados)).subscribe((data)=>{
      this.modal.dismiss(this.dados);
    })
  }
  }
  