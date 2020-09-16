import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';

@Component({
  selector: 'app-covid19-dashboard',
  templateUrl: './covid19-dashboard.component.html',
  styleUrls: ['./covid19-dashboard.component.scss']
})
export class Covid19DashboardComponent implements OnInit {

  covid19Data: any[];

  constructor(private covid: Covid19Service) { }

  ngOnInit(): void {
    this.covid.getData().subscribe(elems => this.covid19Data = elems);
  }

}
