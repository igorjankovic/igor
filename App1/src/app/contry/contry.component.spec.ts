import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContryComponent } from './contry.component';

describe('ContryComponent', () => {
  let component: ContryComponent;
  let fixture: ComponentFixture<ContryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
