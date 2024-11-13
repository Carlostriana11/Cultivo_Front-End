import { ComponentFixture, TestBed } from '@angular/core/testing';
import CareGuideComponentComponent from './care-guide-component.component';


describe('CareGuideComponentComponent', () => {
  let component: CareGuideComponentComponent;
  let fixture: ComponentFixture<CareGuideComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareGuideComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareGuideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
