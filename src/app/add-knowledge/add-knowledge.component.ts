import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, UrlTree } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-add-knowledge',
  standalone: true,
  imports: [NavigationComponent, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressBarModule],
  templateUrl: './add-knowledge.component.html',
  styleUrl: './add-knowledge.component.scss'
})
export class AddKnowledgeComponent {
  title = new FormControl('', [Validators.required, Validators.minLength(1)]);
  content = new FormControl('', [Validators.required, Validators.minLength(1)]);
  autor = new FormControl('', [Validators.required, Validators.minLength(1)]);
  showSpinner: boolean = false;

  constructor(private router: Router,private API: ApiService) { }


  navigateTo(link: string | UrlTree) {
    this.router.navigateByUrl(link);
  }

  
  saveArtikel() {
    this.showSpinner = true;
    let body = {
      'title': this.title.value,
      'content': this.content.value,
      'autor': this.autor.value,
    };
    
    this.API.postContentToDB(body);
    setTimeout(() => {
      this.navigateTo('');
      this.showSpinner = false;
    }, 1000);

  }

}
