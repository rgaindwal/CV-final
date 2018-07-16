import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositonOfResponsibilityComponent } from './positon-of-responsibility.component';

describe('PositonOfResponsibilityComponent', () => {
  let component: PositonOfResponsibilityComponent;
  let fixture: ComponentFixture<PositonOfResponsibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositonOfResponsibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositonOfResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
