import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dumb',
  templateUrl: './home-dumb.component.html',
  styleUrls: ['./home-dumb.component.scss'],
})
export class HomeDumbComponent implements OnInit {
  posterCoordinatesSequence = 'HOLA TAROLAS';

  constructor() {}

  ngOnInit() {}
}
