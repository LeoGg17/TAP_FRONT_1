import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcuentosComponent } from './editarcuentos.component';

describe('EditarcuentosComponent', () => {
  let component: EditarcuentosComponent;
  let fixture: ComponentFixture<EditarcuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcuentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
