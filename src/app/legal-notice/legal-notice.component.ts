import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavigationComponent, MatButtonModule, MatIconModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  constructor(private router: Router) { }


  navigateTo(link: string | UrlTree) {
    this.router.navigateByUrl(link);
  }

}
