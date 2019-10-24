import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public ROOT_URl = 'http://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) { }

  getPost() {
    return this.http.get<Post[]>(`${this.ROOT_URl}/posts`);
  }

}
