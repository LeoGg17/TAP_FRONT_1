import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentosparaverComponent } from './cuentosparaver.component';

describe('CuentosparaverComponent', () => {
  let component: CuentosparaverComponent;
  let fixture: ComponentFixture<CuentosparaverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentosparaverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentosparaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
