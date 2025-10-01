import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carta2Component } from './carta2.component';

describe('Carta2Component', () => {
  let component: Carta2Component;
  let fixture: ComponentFixture<Carta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carta2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
