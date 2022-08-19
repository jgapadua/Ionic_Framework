import { CadastrarPage } from './../cadastrar/cadastrar.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private dadoQueVeioDoModal;
  msg = 'Adicione uma nova venda para começar'
  saldoAtual = 0
  totalEntradas = 0
  totalSaidas = 0

  constructor(
    public route: Router, 
    private modalCtrl: ModalController
    ) {}

  ngOnInit() {
  }

  private arrayVendas : any = [];

  cad(){
    this.route.navigateByUrl('cadastrar');
  }

  addVenda(dados){
    this.arrayVendas.push(dados);                                                                                                                                                                                                                                  
  }

  async cadastrar(){
    const modal : HTMLIonModalElement = await this.modalCtrl.create({
      component : CadastrarPage,
      componentProps : {
        prop : 'value'
      }
    });
    modal.onDidDismiss().then((data)=>{
      if(data){
        this.dadoQueVeioDoModal = data;
        console.log(data);
        if(data["data"]["tipo"] == "Saida"){
          this.totalSaidas = this.totalSaidas + data["data"]["valor"]
          this.saldoAtual = this.saldoAtual - data["data"]["valor"]
        } else {
          this.totalEntradas = this.totalEntradas + data["data"]["valor"]
          this.saldoAtual = this.saldoAtual + data["data"]["valor"]
        }
        this.addVenda(data["data"])
        
        this.msg = ' ';
      }
    })
    return await modal.present();
  } 


}
