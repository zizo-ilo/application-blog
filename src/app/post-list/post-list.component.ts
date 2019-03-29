import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle : string ;
  @Input() postContent : string ;
  @Input() postLoveIts : number ;
  postCreated_at : Date;

  constructor() {
    this.postCreated_at =  new Date();
  }

  ngOnInit() {
  }

  loveIt(){
    return ++this.postLoveIts ;
  }
  Dontloveit(){
    return --this.postLoveIts ;
  }
}
