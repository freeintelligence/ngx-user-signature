import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUserSignatureComponent } from './ngx-user-signature.component';

describe('NgxUserSignatureComponent', () => {
  let component: NgxUserSignatureComponent;
  let fixture: ComponentFixture<NgxUserSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUserSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUserSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
