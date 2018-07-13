import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvIrmaComponent } from './cv-irma.component';

describe('CvIrmaComponent', () => {
  let component: CvIrmaComponent;
  let fixture: ComponentFixture<CvIrmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvIrmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvIrmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
