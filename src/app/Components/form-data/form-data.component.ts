import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { User } from 'src/app/user';
import { first } from 'rxjs';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit{

  user: User = new User();

  userForm = new FormGroup({
    firstname : new FormControl(),
    lastname : new FormControl(),
    email : new FormControl(),
  });

  constructor(
    private postService: PostService,
  ){}

  ngOnInit(): void {
  
  }
 
  onSubmit() : void{
    console.log("Submit");
    console.log(this.userForm.value)
    this.user.firstName = this.userForm.get("firstname")?.value;
    this.user.lastName = this.userForm.get("lastname")?.value;
    this.user.email = this.userForm.get("email")?.value;
    
    console.log(this.user)

    
    this.postService.createUser(this.user).subscribe(data =>{
      console.log(data)
    })
  }
  
}
