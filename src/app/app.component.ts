import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Posts";
  postlist = [
    {
      title : "Mon premier post ",
      content : "le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      loveIts: 1,
    },
    {
      title : "Mon deuxième post ",
      content : "le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      loveIts: -1,
    },
    {
      title : "Encore un post ",
      content : "le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      loveIts: 0,
    },
  ];
}
