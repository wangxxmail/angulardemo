import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeSpendAnalysisComponent } from './income-spend-analysis.component';

describe('IncomeSpendAnalysisComponent', () => {
  let component: IncomeSpendAnalysisComponent;
  let fixture: ComponentFixture<IncomeSpendAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeSpendAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeSpendAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
