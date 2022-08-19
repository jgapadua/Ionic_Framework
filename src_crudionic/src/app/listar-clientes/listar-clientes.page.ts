import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { CadastroclientesPage } from '../cadastroclientes/cadastroclientes.page';
import { EditarclientesPage } from '../editarclientes/editarclientes.page';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.page.html',
  styleUrls: ['./listar-clientes.page.scss'],
})
export class ListarClientesPage implements OnInit {
// lista para receber os dados
Clientes:any=[];
//endereco da api
api_URL = "http://localhost/crudionic/listarcliente.php"
api_DELETE = "http://localhost/crudionic/deletarcliente.php"

//utilizar o http
constructor(private http: HttpClient,private modalCtrl:ModalController) { }

  ngOnInit() {
    //chamar a funcao ao carregar a pagina
    this.listarClientes();
  }

//funcao para listar produtos do backend
listarClientes(){
  //para acessar o backend utilizar a funcao get do http
  this.http.get(this.api_URL)
  .subscribe((data:any)=>{
    //console.log(data);
    //preencher o vetor com os dados do banco de dados
    this.Clientes=data;
  })
}
async cadastrar(){
  const modal:HTMLIonModalElement=await this.modalCtrl.create({
    component:CadastroclientesPage,
    componentProps:{
      prop:'value'
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      this.listarClientes();
    }
  })
  return await modal.present();   
}
async editar(item){
  const modal:HTMLIonModalElement=await this.modalCtrl.create({
    component:EditarclientesPage,
    componentProps:{
      'clientes':item
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      this.listarClientes();
    }
  })
  return await modal.present();
}
deletar(item){
  let dados={codigo:item.codigo};
  this.http.post(this.api_DELETE,JSON.stringify(dados)).subscribe((data:any)=>{
    this.listarClientes();
  })
}
}
