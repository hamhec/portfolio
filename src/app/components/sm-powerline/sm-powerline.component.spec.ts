import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmPowerlineComponent } from './sm-powerline.component';

describe('SmPowerlineComponent', () => {
  let component: SmPowerlineComponent;
  let fixture: ComponentFixture<SmPowerlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmPowerlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmPowerlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
