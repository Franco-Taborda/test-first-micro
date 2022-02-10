import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hello-world-dumb',
  templateUrl: './hello-world-dumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldDumbComponent {
  gridCoordinates = 'HELLO WORLD';

  constructor() {}
}
