import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBillbookComponent } from './my-billbook.component';

describe('MyBillbookComponent', () => {
  let component: MyBillbookComponent;
  let fixture: ComponentFixture<MyBillbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBillbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBillbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
