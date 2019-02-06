import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SIGNINComponent } from './sign-in.component';

describe('SIGNINComponent', () => {
  let component: SIGNINComponent;
  let fixture: ComponentFixture<SIGNINComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIGNINComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIGNINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
