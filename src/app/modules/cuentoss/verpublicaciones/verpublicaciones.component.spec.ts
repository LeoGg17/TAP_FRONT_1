import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpublicacionesComponent } from './verpublicaciones.component';

describe('VerpublicacionesComponent', () => {
  let component: VerpublicacionesComponent;
  let fixture: ComponentFixture<VerpublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpublicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
