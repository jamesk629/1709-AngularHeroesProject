import { Component } from '@angular/core';

/**
 *
 *  *Component Decorator* 
 *  requires a selector and template/templateUrl
 * 
 */

export class Hero{
  id: number;
  name: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heros Application';
  hero : Hero  = {
    id: 1,
    name: 'WindStorm'}
}


