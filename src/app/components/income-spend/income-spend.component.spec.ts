import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeSpendComponent } from './income-spend.component';

describe('IncomeSpendComponent', () => {
  let component: IncomeSpendComponent;
  let fixture: ComponentFixture<IncomeSpendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeSpendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
