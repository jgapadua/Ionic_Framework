import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanciaPage } from './distancia.page';

describe('DistanciaPage', () => {
  let component: DistanciaPage;
  let fixture: ComponentFixture<DistanciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
