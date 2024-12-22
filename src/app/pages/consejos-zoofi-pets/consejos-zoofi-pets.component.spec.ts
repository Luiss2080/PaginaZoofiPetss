import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejosZoofiPetsComponent } from './consejos-zoofi-pets.component';

describe('ConsejosZoofiPetsComponent', () => {
  let component: ConsejosZoofiPetsComponent;
  let fixture: ComponentFixture<ConsejosZoofiPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsejosZoofiPetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsejosZoofiPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
