import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicRowComponent } from './academic-row.component';

describe('AcademicRowComponent', () => {
  let component: AcademicRowComponent;
  let fixture: ComponentFixture<AcademicRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
