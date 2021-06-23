import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFlowComponent } from './business-flow.component';

describe('BusinessFlowComponent', () => {
  let component: BusinessFlowComponent;
  let fixture: ComponentFixture<BusinessFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
