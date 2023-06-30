import { Component } from '@angular/core';
import { User } from '../user';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [HttpService]
})
export class CreateComponent {
  User!: User;

  constructor(private http: HttpService, private router: Router){
    this.User = new User();
  }

  submit() {
    this.http.postUser(this.User).subscribe();
    this.router.navigate(['/']);
  };

}
