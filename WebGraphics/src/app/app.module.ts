import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BaseChart } from './base-chart/base-chart';

const routes: Routes = [
  { path: 'chart', component: BaseChart },
];

@NgModule({
  declarations: [
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppRoutingModule { }
