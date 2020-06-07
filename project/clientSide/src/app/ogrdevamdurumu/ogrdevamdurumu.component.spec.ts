import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrdevamdurumuComponent } from './ogrdevamdurumu.component';

describe('OgrdevamdurumuComponent', () => {
  let component: OgrdevamdurumuComponent;
  let fixture: ComponentFixture<OgrdevamdurumuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrdevamdurumuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrdevamdurumuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
