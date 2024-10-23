import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoInputSignalComponent } from './hijoInputSignal.component';

describe('HijoInputSignalComponent', () => {
  let component: HijoInputSignalComponent;
  let fixture: ComponentFixture<HijoInputSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoInputSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoInputSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
