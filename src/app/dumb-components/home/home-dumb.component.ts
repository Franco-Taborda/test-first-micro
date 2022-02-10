import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-dumb',
  templateUrl: './home-dumb.component.html',
  styleUrls: ['./home-dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDumbComponent {
  constructor() {}
}
