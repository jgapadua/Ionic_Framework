import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { CadastrovendasPage } from '../cadastrovendas/cadastrovendas.page';


@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-vendas.page.html',
  styleUrls: ['./listar-vendas.page.scss'],
})
export class ListarVendasPage implements OnInit {

// lista para receber os dados
Vendas:any=[];
//endereco da api
api_URL = "http://localhost/crudionic/listarvenda.php"
api_DELETE = "http://localhost/crudionic/deletarvenda.php"

 //utilizar o http
constructor(private http: HttpClient,private modalCtrl:ModalController) { }

  ngOnInit() {
    //chamar a funcao ao carregar a pagina
    this.listarVendas();
  }

//funcao para listar produtos do backend
listarVendas(){
  //para acessar o backend utilizar a funcao get do http
  this.http.get(this.api_URL)
  .subscribe((data:any)=>{
    //console.log(data);
    //preencher o vetor com os dados do banco de dados
    this.Vendas=data;
  })
}
async cadastrar(){
  const modal:HTMLIonModalElement=await this.modalCtrl.create({
    component:CadastrovendasPage,
    componentProps:{
      prop:'value'
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      this.listarVendas();
    }
  })
  return await modal.present();
}
async editar(item){
  const modal:HTMLIonModalElement=await this.modalCtrl.create({
    component:EditarvendasPage,
    componentProps:{
      'vendas':item
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      this.listarVendas();
    }
  })
  return await modal.present();
}
deletar(item){
  let dados={id:item.id};
  this.http.post(this.api_DELETE,JSON.stringify(dados)).subscribe((data:any)=>{
    this.listarVendas();
  })
}
}



