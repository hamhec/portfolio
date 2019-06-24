import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmCardComponent } from './sm-card.component';

describe('SmCardComponent', () => {
  let component: SmCardComponent;
  let fixture: ComponentFixture<SmCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
