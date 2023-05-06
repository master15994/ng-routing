import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { AboutExtraComponent } from './about-extra/about-extra.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AboutComponent,
    HomeComponent,
    PostsComponent,
    AboutExtraComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
