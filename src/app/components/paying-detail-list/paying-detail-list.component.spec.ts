import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayingDetailListComponent } from './paying-detail-list.component';

describe('PayingDetailListComponent', () => {
  let component: PayingDetailListComponent;
  let fixture: ComponentFixture<PayingDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayingDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayingDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
