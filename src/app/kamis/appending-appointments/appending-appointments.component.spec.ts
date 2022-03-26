import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendingAppointmentsComponent } from './appending-appointments.component';

describe('AppendingAppointmentsComponent', () => {
  let component: AppendingAppointmentsComponent;
  let fixture: ComponentFixture<AppendingAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppendingAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendingAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
