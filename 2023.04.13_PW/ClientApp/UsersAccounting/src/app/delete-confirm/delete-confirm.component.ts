import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css'],
  providers: [HttpService]
})
export class DeleteConfirmComponent {
  Id!: number;

  constructor(private activateRoute: ActivatedRoute, private http: HttpService,
    private router: Router) {
    this.Id = activateRoute.snapshot.params['id'];
  }

  deleteConfirm() {
    this.http.deleteUser(this.Id).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => console.error(err)
    });
  }

}
