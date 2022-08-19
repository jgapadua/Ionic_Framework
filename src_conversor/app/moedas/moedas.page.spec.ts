import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasPage } from './moedas.page';

describe('MoedasPage', () => {
  let component: MoedasPage;
  let fixture: ComponentFixture<MoedasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoedasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoedasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
