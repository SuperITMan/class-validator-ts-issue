import { Component } from '@angular/core';
import { isIn } from 'class-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8';
  myArray = ['1', '2', '3'];

  constructor() {
    console.log('Is in ? ', isIn('1', this.myArray));
  }
}
