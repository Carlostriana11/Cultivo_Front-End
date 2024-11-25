import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFertelizerComponent } from './update-fertelizer.component';

describe('UpdateFertelizerComponent', () => {
  let component: UpdateFertelizerComponent;
  let fixture: ComponentFixture<UpdateFertelizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFertelizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFertelizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
