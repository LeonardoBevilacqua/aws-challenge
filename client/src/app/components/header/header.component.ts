import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {

  title = 'AWS Challenge';

  constructor(private router: Router) { }

  getCurrentRoute(): string {
    return this.router.url;
  }

}
