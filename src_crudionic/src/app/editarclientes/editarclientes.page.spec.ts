import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarclientesPage } from './editarclientes.page';

describe('EditarclientesPage', () => {
  let component: EditarclientesPage;
  let fixture: ComponentFixture<EditarclientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarclientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarclientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
