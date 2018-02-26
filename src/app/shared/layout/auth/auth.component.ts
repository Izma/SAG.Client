import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `<div id="main"><router-outlet></router-outlet></div>`,
  styles: []
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
