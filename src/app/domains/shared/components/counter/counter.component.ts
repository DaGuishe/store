import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number=0;
  @Input({required: true}) message: string='';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // BEFORE RENDER
    // Una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration)
    if (duration && !duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // Una vez
    // async, then, subscribe
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration: ',this.duration);
    console.log('message: ',this.message);
    this.counterRef = window.setInterval(() => {
      this.counter.update(statePrev => statePrev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // hijos ya fueron renderisados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // before destroy
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
    console.log('-'.repeat(10));
    //async
  }
}
