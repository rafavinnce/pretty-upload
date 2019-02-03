import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyUploadComponent } from './pretty-upload.component';

describe('PrettyUploadComponent', () => {
  let component: PrettyUploadComponent;
  let fixture: ComponentFixture<PrettyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
