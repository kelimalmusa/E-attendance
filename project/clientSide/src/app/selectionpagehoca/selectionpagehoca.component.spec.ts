import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionpagehocaComponent } from './selectionpagehoca.component';

describe('SelectionpagehocaComponent', () => {
  let component: SelectionpagehocaComponent;
  let fixture: ComponentFixture<SelectionpagehocaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionpagehocaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionpagehocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
