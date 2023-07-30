import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFormComponent } from './Components/update-form/update-form.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { FormDataComponent } from './Components/form-data/form-data.component';

const routes: Routes = [
  {path: "update-form" , component: UpdateFormComponent},
  {path: "", component: UserListComponent},
  {path: "form", component: FormDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
