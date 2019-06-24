import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmCommandListComponent } from './sm-command-list.component';

describe('SmCommandListComponent', () => {
  let component: SmCommandListComponent;
  let fixture: ComponentFixture<SmCommandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmCommandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmCommandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
