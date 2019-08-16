import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from './post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';

  constructor(public postsService: PostsService) {}

  ngOnInit() {}

  onPost() {
    alert('post added');
  }
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
