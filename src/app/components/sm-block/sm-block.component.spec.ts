import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmBlockComponent } from './sm-block.component';

describe('SmBlockComponent', () => {
  let component: SmBlockComponent;
  let fixture: ComponentFixture<SmBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
