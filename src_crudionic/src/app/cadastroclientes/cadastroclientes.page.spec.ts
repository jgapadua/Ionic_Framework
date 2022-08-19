import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroclientesPage } from './cadastroclientes.page';

describe('CadastroclientesPage', () => {
  let component: CadastroclientesPage;
  let fixture: ComponentFixture<CadastroclientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroclientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroclientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
