import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, UrlTree } from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(private router: Router) { }


  navigateTo(link: string | UrlTree) {
    this.router.navigateByUrl(link);
  }

}
