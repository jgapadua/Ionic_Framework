import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { CadastrarProfessorPage } from '../cadastrar-professor/cadastrar-professor.page';
import { EditarProfessorPage } from '../editar-professor/editar-professor.page';

@Component({
  selector: 'app-selecionar-professor',
  templateUrl: './selecionar-professor.page.html',
  styleUrls: ['./selecionar-professor.page.scss'],
})
export class SelecionarProfessorPage implements OnInit {
// lista para receber os dados
Professores:any=[];
//endereco da api
api_URL = "http://localhost/app_boletim/selecionarprofessor.php"
api_DELETE = "http://localhost/app_boletim/excluirprofessor.php"

//utilizar o http
constructor(private http: HttpClient,private modalCtrl:ModalController) { }

  ngOnInit() {
    //chamar a funcao ao carregar a pagina
    this.listarProfessor();
  }

//funcao para listar produtos do backend
listarProfessor(){
  //para acessar o backend utilizar a funcao get do http
  this.http.get(this.api_URL)
  .subscribe((data:any)=>{
    //console.log(data);
    //preencher o vetor com os dados do banco de dados
    this.Professores=data;
  })
}
async cadastrar(){
  const modal:HTMLIonModalElement=await this.modalCtrl.create({
    component:CadastrarProfessorPage,
    componentProps:{
      prop:'value'
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      this.listarProfessor();
    }
  })
  return await modal.present();   
}
async editar(item){
  const modal:HTMLIonModalElement=await this.modalCtrl.create({
    component:EditarProfessorPage,
    componentProps:{
      'professor':item
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      this.listarProfessor();
    }
  })
  return await modal.present();
}
deletar(item){
  let dados={codigo:item.codigo};
  this.http.post(this.api_DELETE,JSON.stringify(dados)).subscribe((data:any)=>{
    this.listarProfessor();
  })
}
}
