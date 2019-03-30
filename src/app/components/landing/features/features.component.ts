import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() userType: any;
  card = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.userType);
  }

  selectCard(idCard) {
    if (idCard !== this.card) {
      this.card = idCard;
    } else {
      this.card = null;
    }
  }
}
