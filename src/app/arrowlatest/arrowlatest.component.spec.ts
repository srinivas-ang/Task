import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowlatestComponent } from './arrowlatest.component';

describe('ArrowlatestComponent', () => {
  let component: ArrowlatestComponent;
  let fixture: ComponentFixture<ArrowlatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowlatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowlatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
