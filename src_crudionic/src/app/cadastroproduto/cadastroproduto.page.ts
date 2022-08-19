import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.page.html',
  styleUrls: ['./cadastroproduto.page.scss'],
})
export class CadastroprodutoPage implements OnInit {
  nome
  qtde
  preco
  dados:any=[]
  apiURL="http://localhost/crudionic/cadastrarproduto.php";
    constructor(private http:HttpClient,private toasCtrl:ToastController,private modal:ModalController) { }
  
    ngOnInit() {
    }
  salvar(){
    this.dados={nome:this.nome,qtde:this.qtde,preco:this.preco};
    this.http.post(this.apiURL,JSON.stringify(this.dados)).subscribe((data)=>{
      this.modal.dismiss(this.dados);
    })
  }
  }
  
