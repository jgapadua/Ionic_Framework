import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SembebidaPage } from './sembebida.page';

describe('SembebidaPage', () => {
  let component: SembebidaPage;
  let fixture: ComponentFixture<SembebidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SembebidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SembebidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
