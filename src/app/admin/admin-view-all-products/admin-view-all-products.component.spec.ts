import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllProductsComponent } from './admin-view-all-products.component';

describe('AdminViewAllProductsComponent', () => {
  let component: AdminViewAllProductsComponent;
  let fixture: ComponentFixture<AdminViewAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAllProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
