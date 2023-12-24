import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Estudos-Angular';
  isAliveCheckComponent: boolean = true

  disposeCheckSample():void{
    this.isAliveCheckComponent = false
  }
}
