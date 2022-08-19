import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router:Router){
  }
  
  paginaProfessor(){
    this.router.navigateByUrl('professor');
  }
  paginaAlunos(){
    this.router.navigateByUrl('alunos');
  }
  paginaDisciplinas(){
    this.router.navigateByUrl('disciplinas');
  }
  paginaNotas(){
    this.router.navigateByUrl('notas');
  }
 
  }
  