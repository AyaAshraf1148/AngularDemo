import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../Services/posts.service';
import { Iposts } from '../SharedClassesAndTypes/Iposts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor( private postsService:PostsService ) { }

  postsList:any;
  ngOnInit(): void {
    this.postsService.GetAllPosts().subscribe((postsData)=>
    {
      this.postsList=postsData;
      
    })
  }
}
