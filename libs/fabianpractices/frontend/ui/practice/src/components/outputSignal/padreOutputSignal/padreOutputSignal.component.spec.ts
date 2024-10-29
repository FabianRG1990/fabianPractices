import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreOutputSignalComponent } from './padreOutputSignal.component';

describe('PadreOutputSignalComponent', () => {
  let component: PadreOutputSignalComponent;
  let fixture: ComponentFixture<PadreOutputSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreOutputSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreOutputSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
