import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-dumb',
  templateUrl: 'home-dumb.component.html',
  styleUrls: ['./home-dumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeDumbComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
