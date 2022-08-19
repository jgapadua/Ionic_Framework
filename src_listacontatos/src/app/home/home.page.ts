import { CadastroPage } from './../cadastro/cadastro.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarPage } from '../editar/editar.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //criar a lista de contatos

  private Contatos:any = [{nome:'teste', telefone:'3132'}];

  //lista para receber do windowlocalstorage
  private lista:any=[];

  constructor(private modalCtrl: ModalController){}

  ngOnInit(){
    // receber valor do localstorage
    this.lista=JSON.parse(window.localStorage.getItem('contatos'));
    //caso tenha valor preencher os contatos
    if(this.lista){
      this.Contatos=this.lista;
    }
  }
// metodo cadastrar contato
async  cadastrar(){
  const modal: HTMLIonModalElement = await this.modalCtrl.create({
    component: CadastroPage,
    componentProps:{
      prop:'value'
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      // console.log(data["data"].contato);
      this.addContatos(data["data"].contato);
    }
  })
  return await modal.present();
}
// metodo para adicionar contatos
addContatos(dados){
  // console.log(dados);
  this.Contatos.push(dados);
  //gravar no localstorage
  window.localStorage.setItem('contatos',JSON.stringify(this.Contatos));
}

remover(contato){
  let remover  = this.Contatos.indexOf(contato);

  if(remover > -1){
  this.Contatos.splice(remover, 1);
  window.localStorage.setItem('contatos',JSON.stringify(this.Contatos));
  }
}
// metodo editar contato
async  editar(contato){
  let index = this.Contatos.indexOf(contato);
  if(index > -1){
    this.Contatos.splice(index,1)
  }
  const modal: HTMLIonModalElement = await this.modalCtrl.create({
    component: EditarPage,
    componentProps:{
      'contato':contato
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      // console.log(data["data"].contato);
      this.addContatos(data["data"].contato);
    }
  })
  return await modal.present();
}

}