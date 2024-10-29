import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreInputSignalComponent } from './padreInputSignal.component';

describe('PadreInputSignalComponent', () => {
  let component: PadreInputSignalComponent;
  let fixture: ComponentFixture<PadreInputSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreInputSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreInputSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
