import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuBlogComponent } from "./component/menu-blog/menu-blog.component";
import { TitleBlogComponent } from "./component/title-blog/title-blog.component";
import { PagesComponent } from "./pages/home/pages.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuBlogComponent, TitleBlogComponent, PagesComponent]
})
export class AppComponent {
  title = 'blog';
}
