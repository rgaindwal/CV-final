import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicRowTitlesComponent } from './academic-row-titles.component';

describe('AcademicRowTitlesComponent', () => {
  let component: AcademicRowTitlesComponent;
  let fixture: ComponentFixture<AcademicRowTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicRowTitlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicRowTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
