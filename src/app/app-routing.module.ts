import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { ErrorsComponent } from './errors/errors.component';

//http://localhost:4200/ = HomeComponent
//http://localhost:4200/about = AboutComponent
//http://localhost:4200/post = PostComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'extra',
        component: AboutExtraComponent,
      },
    ],
  },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'error', component: ErrorsComponent },
  { path: '**', redirectTo: '/error' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
