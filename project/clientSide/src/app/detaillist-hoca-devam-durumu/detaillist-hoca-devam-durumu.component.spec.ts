import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillistHocaDevamDurumuComponent } from './detaillist-hoca-devam-durumu.component';

describe('DetaillistHocaDevamDurumuComponent', () => {
  let component: DetaillistHocaDevamDurumuComponent;
  let fixture: ComponentFixture<DetaillistHocaDevamDurumuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillistHocaDevamDurumuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillistHocaDevamDurumuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
