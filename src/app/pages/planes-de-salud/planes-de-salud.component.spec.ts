import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesDeSaludComponent } from './planes-de-salud.component';

describe('PlanesDeSaludComponent', () => {
  let component: PlanesDeSaludComponent;
  let fixture: ComponentFixture<PlanesDeSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanesDeSaludComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesDeSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
