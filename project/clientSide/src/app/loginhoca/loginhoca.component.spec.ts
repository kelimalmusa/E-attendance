import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginhocaComponent } from './loginhoca.component';

describe('LoginhocaComponent', () => {
  let component: LoginhocaComponent;
  let fixture: ComponentFixture<LoginhocaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginhocaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginhocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
