import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreatorInfoFertilizerComponent } from './button-creator-info-fertilizer.component';

describe('ButtonCreatorInfoFertilizerComponent', () => {
  let component: ButtonCreatorInfoFertilizerComponent;
  let fixture: ComponentFixture<ButtonCreatorInfoFertilizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCreatorInfoFertilizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCreatorInfoFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
