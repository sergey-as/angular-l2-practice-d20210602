import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Post} from "../models";

@Injectable({
  providedIn: 'root'
})

export class PostsResolveService implements Resolve<Post[]> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
