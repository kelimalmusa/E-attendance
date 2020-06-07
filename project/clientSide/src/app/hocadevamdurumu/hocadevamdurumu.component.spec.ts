import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocadevamdurumuComponent } from './hocadevamdurumu.component';

describe('HocadevamdurumuComponent', () => {
  let component: HocadevamdurumuComponent;
  let fixture: ComponentFixture<HocadevamdurumuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocadevamdurumuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocadevamdurumuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
