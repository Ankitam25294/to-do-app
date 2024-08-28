import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [
      FormsModule
    ],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.scss'
})
export class CustomCounterInputComponent {
  value:number;
  constructor(private store: Store<{ counter: CounterState}>) {
    
  }
  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }))
  }

  modifyText() {
    this.store.dispatch(changeChannelName());
  }
}
