import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMIPageComponent } from './bmi-page.component';

describe('BMIPageComponent', () => {
  let component: BMIPageComponent;
  let fixture: ComponentFixture<BMIPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BMIPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMIPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
