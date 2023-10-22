import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooChildComponent } from './foo-child.component';

describe('FooChildComponent', () => {
  let component: FooChildComponent;
  let fixture: ComponentFixture<FooChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooChildComponent]
    });
    fixture = TestBed.createComponent(FooChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
