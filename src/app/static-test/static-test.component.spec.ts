import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticTestComponent } from './static-test.component';

describe('StaticTestComponent', () => {
  let component: StaticTestComponent;
  let fixture: ComponentFixture<StaticTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaticTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
