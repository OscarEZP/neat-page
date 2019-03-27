import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  scrollingX = 0;
  showUserType: any;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.scrollingX = window.pageYOffset;
  }

  constructor() { }

  ngOnInit() {
  }

  userType($event) {
    this.showUserType = $event;
  }

}
