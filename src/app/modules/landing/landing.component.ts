import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {map, debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  scrollingX = 0;
  showUserType: any;
  innerWidth = document.documentElement.clientWidth;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.scrollingX = window.pageYOffset;
  }

  constructor() {
    const $resizeEvent = fromEvent(window, 'resize')
    .pipe(
      map(() => {
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        };
        }),
      debounceTime(200)
    );
    $resizeEvent.subscribe((data: any) => {
      this.innerWidth = data.width;
      console.log(this.innerWidth, 'ancho');
    });
  }

  ngOnInit() {
  }

  userType($event) {
    this.showUserType = $event;
  }

}
