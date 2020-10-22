import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuActive: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  openMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goToMenu() {
    this.router.navigate(['menu'])
  }

  goToContact() {
    this.router.navigate(['contact'])
  }

}
