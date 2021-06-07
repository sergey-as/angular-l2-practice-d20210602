import {Component} from '@angular/core';
import {Post} from "../../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{

  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.data.subscribe(value => console.log(value.postsResolve));
    this.activatedRoute.data.subscribe(value => this.posts = value.postsResolve);
  }

}
