import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionRefillFormComponent } from './prescription-refill-form.component';

describe('PrescriptionRefillFormComponent', () => {
  let component: PrescriptionRefillFormComponent;
  let fixture: ComponentFixture<PrescriptionRefillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionRefillFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionRefillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
