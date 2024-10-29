import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcponentsComponent } from './comcponents.component';

describe('ComcponentsComponent', () => {
  let component: ComcponentsComponent;
  let fixture: ComponentFixture<ComcponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComcponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComcponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
