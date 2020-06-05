import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrdonemdersComponent } from './ogrdonemders.component';

describe('OgrdonemdersComponent', () => {
  let component: OgrdonemdersComponent;
  let fixture: ComponentFixture<OgrdonemdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrdonemdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrdonemdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
