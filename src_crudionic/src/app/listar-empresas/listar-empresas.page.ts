import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { CadastroempresaPage } from '../cadastroempresa/cadastroempresa.page';
@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.page.html',
  styleUrls: ['./listar-empresas.page.scss'],
})
export class ListarEmpresasPage implements OnInit {
  // lista para receber os dados
  Empresas: any = [];
  //endereco da api
  api_URL = "http://localhost/crudionic/listarempresa.php";
  api_DELETE = "http://localhost/crudionic/deletarempresa.php"

  //utilizar o http
  constructor(private http: HttpClient, private modalCtrl: ModalController) { }
  ngOnInit() {
    //chamar a funcao ao carregar a pagina
    this.listarEmpresas();
  }
  //funcao para listar produtos do backend
  listarEmpresas() {
    //para acessar o backend utilizar a funcao get do http
    this.http.get(this.api_URL)
      .subscribe((data: any) => {
        //console.log(data);
        //preencher o vetor com os dados do banco de dados
        this.Empresas = data;
      });
  }
  async cadastrar() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: CadastroempresaPage,
      componentProps: {
        prop: 'value'
      }
    });
    modal.onDidDismiss().then((data)=>{
      if(data){
        this.listarEmpresas();
      }
    })
    return await modal.present();     
  }
  async editar(item){
    const modal:HTMLIonModalElement=await this.modalCtrl.create({
      component:EditarempresasPage,
      componentProps:{
        'empresa':item
      }
    });
    modal.onDidDismiss().then((data)=>{
      if(data){
        this.listarEmpresas();
      }
    })
    return await modal.present();
  }
  deletar(item){
    let dados={id:item.id};
    this.http.post(this.api_DELETE,JSON.stringify(dados)).subscribe((data:any)=>{
      this.listarEmpresas();
    })
  }
  }
  

