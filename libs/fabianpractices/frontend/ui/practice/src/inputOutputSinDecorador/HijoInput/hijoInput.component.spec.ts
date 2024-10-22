import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HjoInputComponent } from './hijoInput.component';

describe('HjoInputComponent', () => {
  let component: HjoInputComponent;
  let fixture: ComponentFixture<HjoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HjoInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HjoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
