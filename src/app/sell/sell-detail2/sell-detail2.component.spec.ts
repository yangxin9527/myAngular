import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellDetail2Component } from './sell-detail2.component';

describe('SellDetail2Component', () => {
  let component: SellDetail2Component;
  let fixture: ComponentFixture<SellDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
