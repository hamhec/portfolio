import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmOutputlineComponent } from './sm-outputline.component';

describe('SmOutputlineComponent', () => {
  let component: SmOutputlineComponent;
  let fixture: ComponentFixture<SmOutputlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmOutputlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmOutputlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
