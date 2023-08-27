import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFiguresComponent } from './svg-figures.component';

describe('SvgFiguresComponent', () => {
  let component: SvgFiguresComponent;
  let fixture: ComponentFixture<SvgFiguresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgFiguresComponent]
    });
    fixture = TestBed.createComponent(SvgFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
