import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [HttpService]
})
export class EditComponent {
  Id!: number;
  User!: User;

  constructor(private http: HttpService, private router: Router,
    private activateRoute: ActivatedRoute) {
    this.User = new User();
    this.Id = activateRoute.snapshot.params['id'];
  }

  submit() {
    this.http.editUser(this.Id, this.User).subscribe();
    this.router.navigate(['/']);
  };
}
