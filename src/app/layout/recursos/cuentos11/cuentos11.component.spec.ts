import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuentos11Component } from './cuentos11.component';

describe('Cuentos11Component', () => {
  let component: Cuentos11Component;
  let fixture: ComponentFixture<Cuentos11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuentos11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuentos11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
