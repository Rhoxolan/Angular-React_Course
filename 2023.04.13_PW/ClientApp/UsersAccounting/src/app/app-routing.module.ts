import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", component: UserListComponent, title: "User's List" },
  { path: "create", component: CreateComponent, title: "Create User" },
  { path: "edit/:id", component: EditComponent, title: "Edit User" },
  { path: "delete/:id", component: DeleteConfirmComponent, title: "Delete" },
  { path: "**", component: NotFoundComponent, title: "Not Found!" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
