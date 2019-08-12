import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-transaction',
  templateUrl: './search-transaction.component.html',
  styleUrls: ['./search-transaction.component.scss']
})
export class SearchTransactionComponent implements OnInit {
  title:string;
  constructor() {
    this.title = '查找交易';
   }

  ngOnInit() {
  }

}
