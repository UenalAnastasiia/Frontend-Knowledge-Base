import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getContent() {
    const endpoint = 'http://127.0.0.1:8000/content/';
    return lastValueFrom(this.http.get(endpoint));
  }


  postContentToDB(body: any) {
    const endpoint = 'http://127.0.0.1:8000/content/';
    return lastValueFrom(this.http.post(endpoint, body));
  }
}
