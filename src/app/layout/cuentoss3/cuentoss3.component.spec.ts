import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuentoss3Component } from './cuentoss3.component';

describe('Cuentoss3Component', () => {
  let component: Cuentoss3Component;
  let fixture: ComponentFixture<Cuentoss3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuentoss3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuentoss3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
