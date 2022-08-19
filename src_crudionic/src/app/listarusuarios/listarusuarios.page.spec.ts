import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarusuariosPage } from './listarusuarios.page';

describe('ListarusuariosPage', () => {
  let component: ListarusuariosPage;
  let fixture: ComponentFixture<ListarusuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarusuariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
