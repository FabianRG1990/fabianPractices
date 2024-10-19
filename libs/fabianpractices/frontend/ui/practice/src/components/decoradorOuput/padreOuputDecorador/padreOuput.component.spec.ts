import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreOComponent } from './padreOuput.component';

describe('PadreOComponent', () => {
  let component: PadreOComponent;
  let fixture: ComponentFixture<PadreOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreOComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
