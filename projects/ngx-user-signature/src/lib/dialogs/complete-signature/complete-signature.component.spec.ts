import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSignatureComponent } from './complete-signature.component';

describe('CompleteSignatureComponent', () => {
  let component: CompleteSignatureComponent;
  let fixture: ComponentFixture<CompleteSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
