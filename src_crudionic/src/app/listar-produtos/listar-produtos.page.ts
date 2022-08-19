import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { CadastroprodutoPage } from '../cadastroproduto/cadastroproduto.page';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
})
export class ListarProdutosPage implements OnInit {
// lista para receber os dados
Produtos:any=[];
//endereco da api
api_URL = "http://localhost/crudionic/listarprodutos.php"
api_DELETE = "http://localhost/crudionic/deletarproduto.php"
//utilizar o http
constructor(private http: HttpClient,private modalCtrl:ModalController) { }

  ngOnInit() {
    //chamar a funcao ao carregar a pagina
    this.listarProdutos();
  }

//funcao para listar produtos do backend
listarProdutos(){
  //para acessar o backend utilizar a funcao get do http
  this.http.get(this.api_URL)
  .subscribe((data:any)=>{
    //console.log(data);
    //preencher o vetor com os dados do banco de dados
    this.Produtos=data;
  })
}
async cadastrar(){
  const modal:HTMLIonModalElement=await this.modalCtrl.create({
    component:CadastroprodutoPage,
    componentProps:{
      prop:'value'
    }
  });
  modal.onDidDismiss().then((data)=>{
    if(data){
      this.listarProdutos();
    }
  })
  return await modal.present();
}
  async editar(item){
    const modal:HTMLIonModalElement=await this.modalCtrl.create({
      component:EditarprodutosPage,
      componentProps:{
        'produto':item
      }
    });
    modal.onDidDismiss().then((data)=>{
      if(data){
        this.listarProdutos();
      }
    })
    return await modal.present();
  }
  deletar(item){
    let dados={id:item.id};
    this.http.post(this.api_DELETE,JSON.stringify(dados)).subscribe((data:any)=>{
      this.listarProdutos();
    })
  }
  }
  