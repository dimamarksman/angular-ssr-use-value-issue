import { Component, inject } from '@angular/core';

import { MY_DATA_PROVIDER } from './contants';

@Component({
  selector: 'app-root',
  imports: [],
  template: '<h1>Count: {{provider.count()}}</h1>',
})
export class AppComponent {
  readonly provider = inject(MY_DATA_PROVIDER);

  constructor() {
    // increment data on every run
    this.provider.count.update(value => value + 1);
  }
}
