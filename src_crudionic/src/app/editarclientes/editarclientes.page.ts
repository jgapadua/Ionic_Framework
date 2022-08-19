import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editarclientes',
  templateUrl: './editarclientes.page.html',
  styleUrls: ['./editarclientes.page.scss'],
})
export class EditarclientesPage implements OnInit {
nome
telefone
cep
email
dados:any=[]
apiURL="http://localhost/crudionic/editarcliente.php"
  constructor(private http:HttpClient,private navParam:NavParams,private modal:ModalController){ 
    this.codigo=navParam.get('clientes').codigo;
    this.nome=navParam.get('clientes').nome;
    this.telefone=navParam.get('clientes').telefone;
    this.cep=navParam.get('clientes').cep;
    this.email=navParam.get('clientes').email;

  }

  ngOnInit() {
  }
  salvar(){
    this.dados={nome:this.nome,telefone:this.telefone,cep:this.cep,email:this.email,codigo:this.codigo}
    this.http.post(this.apiURL,JSON.stringify(this.dados)).subscribe((data:any)=>{
      this.modal.dismiss(data)
    })
  }

}
