import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOgrDevamDurumComponent } from './list-ogr-devam-durum.component';

describe('ListOgrDevamDurumComponent', () => {
  let component: ListOgrDevamDurumComponent;
  let fixture: ComponentFixture<ListOgrDevamDurumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOgrDevamDurumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOgrDevamDurumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
