import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComnetariosComponent } from './comnetarios.component';

describe('ComnetariosComponent', () => {
  let component: ComnetariosComponent;
  let fixture: ComponentFixture<ComnetariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComnetariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComnetariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
