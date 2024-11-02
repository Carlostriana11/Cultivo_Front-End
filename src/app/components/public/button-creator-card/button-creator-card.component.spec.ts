import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreatorCardComponent } from './button-creator-card.component';

describe('ButtonCreatorCardComponent', () => {
  let component: ButtonCreatorCardComponent;
  let fixture: ComponentFixture<ButtonCreatorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCreatorCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCreatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
