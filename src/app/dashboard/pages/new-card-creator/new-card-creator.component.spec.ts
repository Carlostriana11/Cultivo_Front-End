import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardCreatorComponent } from './new-card-creator.component';

describe('NewCardCreatorComponent', () => {
  let component: NewCardCreatorComponent;
  let fixture: ComponentFixture<NewCardCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCardCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCardCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
