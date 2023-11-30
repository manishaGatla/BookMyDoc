import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientslistViewComponent } from './doctor-patientslist-view.component';

describe('DoctorPatientslistViewComponent', () => {
  let component: DoctorPatientslistViewComponent;
  let fixture: ComponentFixture<DoctorPatientslistViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorPatientslistViewComponent]
    });
    fixture = TestBed.createComponent(DoctorPatientslistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
