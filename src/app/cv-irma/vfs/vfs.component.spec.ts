import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfsComponent } from './vfs.component';

describe('VfsComponent', () => {
  let component: VfsComponent;
  let fixture: ComponentFixture<VfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
