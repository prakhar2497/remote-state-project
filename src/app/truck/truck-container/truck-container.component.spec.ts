import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckContainerComponent } from './truck-container.component';

describe('TruckContainerComponent', () => {
  let component: TruckContainerComponent;
  let fixture: ComponentFixture<TruckContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
