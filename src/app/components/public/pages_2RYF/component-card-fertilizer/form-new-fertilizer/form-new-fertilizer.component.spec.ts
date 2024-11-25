import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewFertilizerComponent } from './form-new-fertilizer.component';

describe('FormNewFertilizerComponent', () => {
  let component: FormNewFertilizerComponent;
  let fixture: ComponentFixture<FormNewFertilizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewFertilizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
