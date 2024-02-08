import { Routes } from '@angular/router';
import { PagesComponent } from "./pages/home/pages.component";
import { ContentComponent } from './pages/content/content.component';
export const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  {
    path: 'content/:1',
    component: ContentComponent
  }
];
