import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {DataSummary} from '../../models/ModelData';
@Component({
  selector: 'app-summary-display',
  templateUrl: './summary-display.component.html',
  styleUrls: ['./summary-display.component.scss']
})
export class SummaryDisplayComponent implements OnInit {
  currentDataSummary:DataSummary;
  @Input() dataSummary:DataSummary;
  
  constructor() {
    this.currentDataSummary={
      year:"",
      month:"",
      remainingMoney:"",
      spendingMoney:"",
      incomeMoney:""
    }
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSummary'] != undefined && changes['dataSummary'].currentValue) {
      this.currentDataSummary = changes['dataSummary'].currentValue;
    }
  }
}
