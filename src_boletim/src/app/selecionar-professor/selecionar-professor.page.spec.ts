import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarProfessorPage } from './selecionar-professor.page';

describe('SelecionarProfessorPage', () => {
  let component: SelecionarProfessorPage;
  let fixture: ComponentFixture<SelecionarProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarProfessorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
