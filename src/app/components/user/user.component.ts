import {Component, Input} from '@angular/core';
import {User} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  @Input()
  user: User; // = u

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


  goToDetails(): void {
    // this.router.navigate(['users', this.user.id]); // users/:id
    // this.activatedRoute.url.subscribe(value => console.log(value));
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user}); // users/:id
  }
}
