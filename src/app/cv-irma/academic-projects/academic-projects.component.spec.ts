import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProjectsComponent } from './academic-projects.component';

describe('AcademicProjectsComponent', () => {
  let component: AcademicProjectsComponent;
  let fixture: ComponentFixture<AcademicProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
