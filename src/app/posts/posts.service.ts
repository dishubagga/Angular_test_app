import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService{
  private postsUpdated = new Subject<Post[]>();

  private posts: Post[] = [];

  getPosts(){
    return [...this.posts]; //this will send reference or adddress
  }

  getPostUpdateListner(){
    return this.postsUpdated.asObservable()
  }

  addPost(title: String, content: String){
    const post:Post = {title: title, content:content }
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

}

