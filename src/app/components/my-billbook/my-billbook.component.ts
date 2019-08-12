import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-billbook',
  templateUrl: './my-billbook.component.html',
  styleUrls: ['./my-billbook.component.scss']
})
export class MyBillbookComponent implements OnInit {
  title:string;
  constructor() {
    this.title = '我的账本';
   }

  ngOnInit() {
  }

}
