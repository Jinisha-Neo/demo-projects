import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { UserSharedService } from 'src/app/services/user-shared.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit{

  constructor(
    private userSharedService : UserSharedService,
    private postService: PostService
    ){}
    updateUser: User = new User()

    updateForm = new FormGroup({
      firstname : new FormControl(),
      lastname : new FormControl(),
      email : new FormControl(),
    });
  ngOnInit(): void {
    console.log("ONINIT");
    
    this.userSharedService.getUserDetails().subscribe(data=>{
      console.log("data",data);
      console.log("id",data?.id);
      
      this.updateForm.get("firstname")?.setValue(data?.firstName)
      this.updateForm.get("lastname")?.setValue(data?.lastName)
      this.updateForm.get("email")?.setValue(data?.email)
      this.updateUser.id = data?.id
    })
  }
 

  updateUserForm(): void{
    this.updateUser.firstName = this.updateForm.get("firstname")?.value
    this.updateUser.lastName = this.updateForm.get("lastname")?.value
    this.updateUser.email = this.updateForm.get("email")?.value
    
    console.log("updateuserform",this.updateUser);
    
    this.postService.updateUserDetails(this.updateUser).subscribe(data=>{
      console.log("updateuserform",data)
    })

  }




}
