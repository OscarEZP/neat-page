import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  scrollingX = 0;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.scrollingX = window.pageYOffset;
  }

  constructor() { }

  ngOnInit() {
  }

}
