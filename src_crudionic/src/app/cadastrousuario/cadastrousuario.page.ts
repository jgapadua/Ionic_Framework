import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.page.html',
  styleUrls: ['./cadastrousuario.page.scss'],
})
export class CadastrousuarioPage implements OnInit {
nome
login
senha
dados:any=[]
apiURL="http://localhost/crudionic/cadastrousuario.php";
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
