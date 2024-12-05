import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatirComponent } from './calculatir.component';

describe('CalculatirComponent', () => {
  let component: CalculatirComponent;
  let fixture: ComponentFixture<CalculatirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculatirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
