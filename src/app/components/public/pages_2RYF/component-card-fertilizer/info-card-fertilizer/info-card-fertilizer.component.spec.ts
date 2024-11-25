import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardFertilizerComponent } from './info-card-fertilizer.component';

describe('InfoCardFertilizerComponent', () => {
  let component: InfoCardFertilizerComponent;
  let fixture: ComponentFixture<InfoCardFertilizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardFertilizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
