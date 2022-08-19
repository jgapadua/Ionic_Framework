import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.page.html',
  styleUrls: ['./editar-professor.page.scss'],
})
export class EditarProfessorPage implements OnInit {
  codigo
  nome
  login
  senha
  dados:any=[]
  apiURL="http://localhost/app_boletim/editarprofessor.php"
    constructor(private http:HttpClient,private navParam:NavParams,private modal:ModalController){ 
      this.codigo=navParam.get('professor').codigo;
      this.nome=navParam.get('professor').nome;
      this.login=navParam.get('professor').login;
      this.senha=navParam.get('professor').senha;
  
    }
  
    ngOnInit() {
    }
    salvar(){
      this.dados={nome:this.nome,login:this.senha,cep:this.senha,codigo:this.codigo}
      this.http.post(this.apiURL,JSON.stringify(this.dados)).subscribe((data:any)=>{
        this.modal.dismiss(data)
      })
    }
  
  }
  