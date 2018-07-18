import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFmsComponent } from './cv-fms.component';

describe('CvFmsComponent', () => {
  let component: CvFmsComponent;
  let fixture: ComponentFixture<CvFmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvFmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
