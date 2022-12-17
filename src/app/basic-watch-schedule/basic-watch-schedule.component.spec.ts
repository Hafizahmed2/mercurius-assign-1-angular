import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicWatchScheduleComponent } from './basic-watch-schedule.component';

describe('BasicWatchScheduleComponent', () => {
  let component: BasicWatchScheduleComponent;
  let fixture: ComponentFixture<BasicWatchScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicWatchScheduleComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicWatchScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be an array', () => {
    const fixture = TestBed.createComponent(BasicWatchScheduleComponent);
    const app = fixture.componentInstance;
    expect(Array.isArray(app.shifts)).toBeTrue();
  });
});
