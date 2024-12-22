import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoProductosComponent } from './catalogo-productos.component';

describe('CatalogoProductosComponent', () => {
  let component: CatalogoProductosComponent;
  let fixture: ComponentFixture<CatalogoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
