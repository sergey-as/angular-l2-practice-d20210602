import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from './components';
import {PostsResolveService, UsersResolveService} from "./services";

let routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    resolve: {usersResolve: UsersResolveService},
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {
    path: 'posts', component: PostsComponent,
    resolve: {postsResolve: PostsResolveService},
    children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
