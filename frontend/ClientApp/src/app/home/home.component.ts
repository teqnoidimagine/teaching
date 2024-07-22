import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngAfterViewInit() {
    // Initialize Kendo UI DatePicker
    (window as any).$("#datepicker").kendoDatePicker();
  }
}

