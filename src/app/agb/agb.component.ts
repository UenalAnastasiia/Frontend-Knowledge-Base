import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { Router, UrlTree } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-agb',
  standalone: true,
  imports: [NavigationComponent, MatButtonModule, MatIconModule],
  templateUrl: './agb.component.html',
  styleUrl: './agb.component.scss'
})
export class AgbComponent {

  constructor(private router: Router) { }


  navigateTo(link: string | UrlTree) {
    this.router.navigateByUrl(link);
  }

}
