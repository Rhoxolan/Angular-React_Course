import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [HttpService]
})
export class UserListComponent implements OnInit {
  Users: User[];

  constructor(private http: HttpService) {
    this.Users = [];
  }

  ngOnInit(): void {
    this.http.getUsers().subscribe({
      next: data => this.Users = data,
      error: err => console.error(err)
    });
  }

}
