import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import { AppComponent } from './app.component';
import { IncomeSpendComponent } from './components/income-spend/income-spend.component';
import { MonthBillComponent } from './components/month-bill/month-bill.component';
import { MyBillbookComponent } from './components/my-billbook/my-billbook.component';
import { SearchTransactionComponent } from './components/search-transaction/search-transaction.component';
import { IncomeSpendAnalysisComponent } from './components/income-spend-analysis/income-spend-analysis.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubnavbarComponent } from './components/subnavbar/subnavbar.component';
import { SummaryDisplayComponent } from './components/summary-display/summary-display.component';
import { SelectionComponent } from './components/selection/selection.component';
import { PayingDetailListComponent } from './components/paying-detail-list/paying-detail-list.component';
const routes: Routes = [
  {path:"", component: IncomeSpendComponent},
  {path:"incomespandanalysis", component: IncomeSpendAnalysisComponent},
  {path:"monthbill", component: MonthBillComponent},
  {path:"mybillbook", component: MyBillbookComponent},
  {path:"serachtransaction", component: SearchTransactionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IncomeSpendComponent,
    MonthBillComponent,
    MyBillbookComponent,
    SearchTransactionComponent,
    IncomeSpendAnalysisComponent,
    NavbarComponent,
    SubnavbarComponent,
    SummaryDisplayComponent,
    SelectionComponent,
    PayingDetailListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
