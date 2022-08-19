import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
})
export class ProfessorPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  inserir(){
    this.router.navigateByUrl('cadastrar-professor');
  }
  selecionar(){
    this.router.navigateByUrl('selecionar-professor');
  }
 
  }