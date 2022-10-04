import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabModule,
    ChartAllModule,
    CalendarModule,
    DropDownListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
