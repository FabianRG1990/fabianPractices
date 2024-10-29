import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoOComponent } from './hijoOutput.component';

describe('HijoOComponent', () => {
  let component: HijoOComponent;
  let fixture: ComponentFixture<HijoOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoOComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
