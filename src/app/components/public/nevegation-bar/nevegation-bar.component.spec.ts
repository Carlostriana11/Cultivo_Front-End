import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevegationBarComponent } from './nevegation-bar.component';

describe('NevegationBarComponent', () => {
  let component: NevegationBarComponent;
  let fixture: ComponentFixture<NevegationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NevegationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevegationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
