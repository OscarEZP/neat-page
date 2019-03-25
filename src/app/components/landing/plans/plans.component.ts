import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  planType = 'monthly';
  constructor() { }

  ngOnInit() {
  }

  plan(plan) {
    this.planType = plan;
  }

}
