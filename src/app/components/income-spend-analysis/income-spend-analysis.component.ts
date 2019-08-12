import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-spend-analysis',
  templateUrl: './income-spend-analysis.component.html',
  styleUrls: ['./income-spend-analysis.component.scss']
})
export class IncomeSpendAnalysisComponent implements OnInit {
  title:string;
  constructor() {
    this.title = '收支分析';
   }

  ngOnInit() {
  }

}
