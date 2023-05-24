import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewremindersComponent } from './viewreminders.component';

describe('ViewremindersComponent', () => {
  let component: ViewremindersComponent;
  let fixture: ComponentFixture<ViewremindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewremindersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewremindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
