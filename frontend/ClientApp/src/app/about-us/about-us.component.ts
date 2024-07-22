import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  ngAfterViewInit() {
    // Initialize Kendo UI DatePicker
    (window as any).$("#datepicker").kendoDatePicker();
  }
}
