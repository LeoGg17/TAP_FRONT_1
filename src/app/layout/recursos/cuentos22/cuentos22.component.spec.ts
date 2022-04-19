import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuentos22Component } from './cuentos22.component';

describe('Cuentos22Component', () => {
  let component: Cuentos22Component;
  let fixture: ComponentFixture<Cuentos22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuentos22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuentos22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
