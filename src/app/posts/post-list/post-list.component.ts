import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription, ObjectUnsubscribedError} from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
  // posts = [
  //   {title: "first post", content: "This is the first type"},
  //   {title: "second post", content: "This is the second type"},
  //   {title: "third post", content: "This is the third type"},
  // ]
  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postsService: PostsService){};

  ngOnInit(){
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListner().subscribe((posts: Post[]) =>{
      this.posts = posts;
    })
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
