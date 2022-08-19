import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
/*criar variavel para formulario
formGroup -> agrupa controles da tela
formBuilder -> valida controles da tela com validators
*/ 
private frm : FormGroup;
constructor(private router:Router, private formBuilder: FormBuilder, public alertController: AlertController){ }

// metodo de iniciacao do form / fazer as validacoes
ngOnInit(){
this.frm=this.formBuilder.group({
  /*validacao dos inputs*/
email:['',Validators.compose([
  Validators.minLength(3),
  Validators.required,
  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
senha:['',Validators.compose([
  Validators.minLength(6),
  Validators.maxLength(15),
  Validators.required])]
});
// IMPRIMIR O FORMULARIO
console.log(this.frm);
}

logar(){
  //console.log(this.frm.controls['email'].value);
  //validar email e senha se estao corretos
   if(this.frm.controls["email"].value == "joao@joao.com" && this.frm.controls["senha"].value == "123456"){
    this.router.navigateByUrl("home");
  }else{
    this.presentAlert();
  }  


}
async presentAlert() {
    const alert = await this.alertController.create({
      header: 'LISTA CONTATOS',
      message: 'Email ou senha incorretos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
