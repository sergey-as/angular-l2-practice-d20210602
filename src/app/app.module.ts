import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {PostComponent, PostsComponent, UserComponent, UsersComponent} from './components';
import {UserResolveService, UsersResolveService} from "./services";

let routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    resolve: {xxx1: UsersResolveService},
    children: [
      {path: ':id', component: UserComponent,
      resolve: {xxx2: UserResolveService}
      }
    ]
  },
  {path: 'posts', component: PostsComponent,
    children: [
      {path: ':id', component: PostComponent}
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
