import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckFilterComponent } from './truck-filter.component';

describe('TruckFilterComponent', () => {
  let component: TruckFilterComponent;
  let fixture: ComponentFixture<TruckFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
