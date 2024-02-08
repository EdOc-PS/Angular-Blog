import { Component, OnInit } from '@angular/core';
import { CardUnlockComponent } from "../../component/card-unlock/card-unlock.component";
import { CardSmallComponent } from "../../component/card-small/card-small.component";
import { TitleBlogComponent } from "../../component/title-blog/title-blog.component";


@Component({
  selector: 'app-pages',
  standalone: true,
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
  imports: [CardUnlockComponent, CardSmallComponent, TitleBlogComponent]
})
export class PagesComponent {
}
