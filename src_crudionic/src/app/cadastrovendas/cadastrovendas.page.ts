import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-cadastrovendas',
  templateUrl: './cadastrovendas.page.html',
  styleUrls: ['./cadastrovendas.page.scss'],
})
export class CadastrovendasPage implements OnInit {
  data
  hora
  total
  cliente_codigo
  produto_codigo
  dados:any=[]
  apiURL="http://localhost/crudionic/cadastrovendas.php";
    constructor(private http:HttpClient,private toasCtrl:ToastController,private modal:ModalController) { }
  
    ngOnInit() {
    }
  salvar(){
    this.dados={data:this.data,hora:this.hora,total:this.total,cliente_codigo:this.cliente_codigo,produto_codigo:this.produto_codigo};
    this.http.post(this.apiURL,JSON.stringify(this.dados)).subscribe((data)=>{
      this.modal.dismiss(this.dados);
    })
  }
  }
  
