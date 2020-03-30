import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuphocaComponent } from './signuphoca.component';

describe('SignuphocaComponent', () => {
  let component: SignuphocaComponent;
  let fixture: ComponentFixture<SignuphocaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuphocaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuphocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
