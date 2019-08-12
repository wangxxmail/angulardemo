import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.scss']
})
export class SubnavbarComponent implements OnInit {
  monthActiveState:boolean;
  accountActiveState:boolean;
  currentMonthList:string[];
  @Input() monthList:string[];
  @Input() monthIndex:number;
  @Output() changeMonthHandler = new EventEmitter<any>();
  constructor() { 
    this.monthActiveState =false;
    this.accountActiveState =false;
    this.currentMonthList= [];
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['monthList'] != undefined && changes['monthList'].currentValue) {
        this.currentMonthList = changes['monthList'].currentValue;
      }
  }
  toggleMonthActiveState():void{
    this.monthActiveState = !this.monthActiveState;
  }
  toggleAccountActiveState():void{
    this.accountActiveState = !this.accountActiveState;
  }
  changeMonth(index:number):void{
    if(index !==this.monthIndex ){
      this.changeMonthHandler.emit(index);
    }
    this.monthActiveState = !this.monthActiveState;
  }
  changeAccount():void{
    this.accountActiveState = !this.accountActiveState;
  }
}
