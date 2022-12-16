import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedScheduleComponent } from './optimized-schedule.component';

describe('OptimizedScheduleComponent', () => {
  let component: OptimizedScheduleComponent;
  let fixture: ComponentFixture<OptimizedScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizedScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizedScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
