import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormDataComponent } from './Components/form-data/form-data.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateFormComponent } from './Components/update-form/update-form.component';
import { UserListComponent } from './Components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDataComponent,
    UpdateFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
