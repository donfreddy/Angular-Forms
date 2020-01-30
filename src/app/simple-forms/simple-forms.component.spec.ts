import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormsComponent } from './simple-forms.component';

describe('SimpleFormsComponent', () => {
  let component: SimpleFormsComponent;
  let fixture: ComponentFixture<SimpleFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
