import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComuncacionEntreComComponent } from './comuncacion-entre-com.component';

describe('ComuncacionEntreComComponent', () => {
  let component: ComuncacionEntreComComponent;
  let fixture: ComponentFixture<ComuncacionEntreComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComuncacionEntreComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComuncacionEntreComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
