import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmenListComponent } from './appointmen-list.component';

describe('AppointmenListComponent', () => {
  let component: AppointmenListComponent;
  let fixture: ComponentFixture<AppointmenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
