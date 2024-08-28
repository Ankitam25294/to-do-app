import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { getChannelName, getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit{
  counter$: Observable<number>;
  channelName$:Observable<string>;
  constructor(private store: Store<{counter: CounterState}>) {

  }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
    this.channelName$ = this.store.select(getChannelName);
  }

}
