import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, UrlTree } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [NavigationComponent, MatCardModule, MatButtonModule, MatIconModule, SearchFilterPipe, CommonModule, FormsModule],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.scss'
})
export class StartpageComponent implements OnInit {
  contentData: any = [];
  categories: any = [];
  showContent: boolean = false;
  searchValue: string;

  constructor(private router: Router,private API: ApiService) { }


  ngOnInit(): void {
    this.loadContent();
  }


  async loadContent() {
    try {
      this.contentData = await this.API.getContent();
    } catch(e) {
      alert('Sorry, Error by loading videos...')
    } finally {
      this.showContent = true;      
    }
  }


  navigateTo(link: string | UrlTree) {
    this.router.navigateByUrl(link);
  }

}
