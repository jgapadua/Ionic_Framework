import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientesPage } from './listar-clientes.page';

describe('ListarClientesPage', () => {
  let component: ListarClientesPage;
  let fixture: ComponentFixture<ListarClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarClientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
