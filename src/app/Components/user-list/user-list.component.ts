import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserSharedService } from 'src/app/services/user-shared.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  posts!:any[];
  constructor(private service: PostService, private router: Router, private userSharedService: UserSharedService){}
  ngOnInit() {
    this.service.getPosts()
        .subscribe(response => {
          console.log("response from backend",response)
          this.posts = response;
        });
  }
  title = 'fetch-api';

  updateUser(user: User){
    console.log("Update user");
    this.userSharedService.setUserDetails(user)
    this.router.navigate(['update-form'])
  }
  
  deleteUser(id: number){
    console.log("delete USER");
    this.service.deleteUser(id).subscribe(data=>{
      console.log("user deleted");
    })
    
  }

}
