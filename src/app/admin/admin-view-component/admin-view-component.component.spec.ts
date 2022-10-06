import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewComponentComponent } from './admin-view-component.component';

describe('AdminViewComponentComponent', () => {
  let component: AdminViewComponentComponent;
  let fixture: ComponentFixture<AdminViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
