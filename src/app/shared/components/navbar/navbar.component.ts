import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

}
