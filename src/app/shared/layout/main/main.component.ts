import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  active = true;
  constructor() { }

  ngOnInit() {
  }


  public displayMenu() {
    this.active = !this.active;
  }
}