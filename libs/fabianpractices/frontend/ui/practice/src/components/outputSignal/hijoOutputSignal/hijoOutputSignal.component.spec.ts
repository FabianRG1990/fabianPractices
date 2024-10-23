import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoOutputSignalComponent } from './hijoOutputSignal.component';

describe('HijoOutputSignalComponent', () => {
  let component: HijoOutputSignalComponent;
  let fixture: ComponentFixture<HijoOutputSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoOutputSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoOutputSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
