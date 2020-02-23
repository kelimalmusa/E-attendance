import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhmetComponent } from './ahmet.component';

describe('AhmetComponent', () => {
  let component: AhmetComponent;
  let fixture: ComponentFixture<AhmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
