import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Router, NavigationEnd } from '@angular/router';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'Aftas-frontend';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.root;
        this.showNavbar = currentRoute.firstChild?.data['navbarVisible'] !== false;
      }
    });
  }
}
