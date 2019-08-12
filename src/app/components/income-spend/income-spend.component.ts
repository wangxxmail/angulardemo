import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {DataSummary} from '../../models/ModelData';
@Component({
  selector: 'app-income-spend',
  templateUrl: './income-spend.component.html',
  styleUrls: ['./income-spend.component.scss']
})
export class IncomeSpendComponent implements OnInit {
  title:string;
  userInfo:any;
  monthIndex:number;
  monthList:string[];
  dataSummary:DataSummary;
  dataDetailList:object[];
  constructor(private dataService:DataService) {
    this.title = '收支';    
    this.monthIndex = 0;
    this.dataService.getUserInfo().subscribe(data=>{        
        this.userInfo = data;
        this.setData(this.monthIndex);
    })
   }

   setData(monthIndex:number):void{
    if(this.userInfo && (this.userInfo.remainingMoney !=undefined) && this.userInfo.payingDetail && this.userInfo.payingDetail.yearList  && this.userInfo.payingDetail.yearList[0]  && this.userInfo.payingDetail.yearList[0].certainYear  && this.userInfo.payingDetail.yearList[0].monthList  && this.userInfo.payingDetail.yearList[0].monthList[monthIndex]  && this.userInfo.payingDetail.yearList[0].monthList[monthIndex].certainMonthShort  && (this.userInfo.payingDetail.yearList[0].monthList[monthIndex].spendingMoney!=undefined) &&(this.userInfo.payingDetail.yearList[0].monthList[monthIndex].incomeMoney!=undefined)){      
      this.monthList = [];
      this.userInfo.payingDetail.yearList[0].monthList.map((item)=>{
        this.monthList.push(item.certainMonth);
      });
      this.dataSummary = {
        year:this.userInfo.payingDetail.yearList[0].certainYear,
        month:this.userInfo.payingDetail.yearList[0].monthList[monthIndex].certainMonthShort,
        remainingMoney:this.userInfo.remainingMoney,
        spendingMoney:this.userInfo.payingDetail.yearList[0].monthList[monthIndex].spendingMoney,
        incomeMoney:this.userInfo.payingDetail.yearList[0].monthList[monthIndex].incomeMoney
      }; 
      this.dataDetailList = this.userInfo.payingDetail.yearList[0].monthList[monthIndex].dayList;
    }
   }

  ngOnInit() {
  }
  changeMonthHandler(index:number):void{
    this.monthIndex = index;
    this.setData(this.monthIndex);
  }
}
