import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { CadastrousuarioPage } from '../cadastrousuario/cadastrousuario.page';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.page.html',
  styleUrls: ['./listarusuarios.page.scss'],
})
export class ListarusuariosPage implements OnInit {
// lista para receber os dados
Usuarios:any=[];
//endereco da api
api_URL = "http://localhost/crudionic/listarusuarios.php"
api_DELETE = "http://localhost/crudionic/deletarusuario.php"

 //utilizar o http
constructor(private http: HttpClient,private modalCtrl:ModalController) { }

  ngOnInit() {
    //chamar a funcao ao carregar a pagina
    this.listarUsuarios();
  }

//funcao para listar produtos do backend
listarUsuarios(){
  //para acessar o backend utilizar a funcao get do http
  this.http.get(this.api_URL)
  .subscribe((data:any)=>{
    //console.log(data);
    //preencher o vetor com os dados do banco de dados
    this.Usuarios=data;
  })
}
async cadastrar(){
  const modal:HTMLIonModalElement=await this.modalCtrl.create({
    component: CadastrousuarioPage,
    componentProps:{
      prop:'value'
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      this.listarUsuarios();
    }
  })
  return await modal.present();
}
async editar(item){
  const modal:HTMLIonModalElement=await this.modalCtrl.create({
    component:EditarusuariosPage,
    componentProps:{
      'usuario':item
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      this.listarUsuarios();
    }
  })
  return await modal.present();
}
deletar(item){
  let dados={id:item.id};
  this.http.post(this.api_DELETE,JSON.stringify(dados)).subscribe((data:any)=>{
    this.listarUsuarios();
  })
}
}