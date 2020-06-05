import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocadonemdersComponent } from './hocadonemders.component';

describe('HocadonemdersComponent', () => {
  let component: HocadonemdersComponent;
  let fixture: ComponentFixture<HocadonemdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocadonemdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocadonemdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
