import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHocaDevamDurumComponent } from './list-hoca-devam-durum.component';

describe('ListHocaDevamDurumComponent', () => {
  let component: ListHocaDevamDurumComponent;
  let fixture: ComponentFixture<ListHocaDevamDurumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHocaDevamDurumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHocaDevamDurumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
