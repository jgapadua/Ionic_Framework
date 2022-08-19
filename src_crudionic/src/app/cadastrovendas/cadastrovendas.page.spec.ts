import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrovendasPage } from './cadastrovendas.page';

describe('CadastrovendasPage', () => {
  let component: CadastrovendasPage;
  let fixture: ComponentFixture<CadastrovendasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrovendasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrovendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
