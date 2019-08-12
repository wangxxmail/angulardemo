import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-bill',
  templateUrl: './month-bill.component.html',
  styleUrls: ['./month-bill.component.scss']
})
export class MonthBillComponent implements OnInit {
  title:string;
  constructor() {
    this.title = '月度账单';
   }

  ngOnInit() {
  }

}
