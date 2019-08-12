import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paying-detail-list',
  templateUrl: './paying-detail-list.component.html',
  styleUrls: ['./paying-detail-list.component.scss']
})
export class PayingDetailListComponent implements OnInit {
  currentDataDetailList:object[];
  @Input() dataDetailList:object[];
  
  constructor() {
    this.currentDataDetailList =[
      {
        "certianDay": "",
        "payList": [
            {
                "receivingPart": "",
                "type": "",
                "payingWay": "",
                "time": "",
                "inAccount": false,
                "incomeFlag": false,
                "val": ""
            }
        ]
      }
    ]
   }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataDetailList'] != undefined && changes['dataDetailList'].currentValue) {
      this.currentDataDetailList = changes['dataDetailList'].currentValue;
    }
  }
}
