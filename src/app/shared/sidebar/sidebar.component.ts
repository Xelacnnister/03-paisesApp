import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})//ponemos el style del pointer aqui para que solo haga objetivo a los "li" del componente Sidebar
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
