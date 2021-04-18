import { Component } from '@angular/core';
import { CrudServiceService } from './crud-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  allUser : any= []
  isEdit = false;
  userObj =
  {
    fname :'',
    lname:'',
    mobile: '',
    email: '',
    password: ''
  }

  constructor(private _crud: CrudServiceService){}

  ngOnInit()
  {
    this.getlatestUser()
  }
  
  addUser(formobj : any)
  {
    console.log(formobj)
    this._crud.createUser(formobj).subscribe((response)=>{
      console.log("added")
      this.getlatestUser();
    })
  }

getlatestUser()
{
  this._crud.getUser().subscribe((response)=> {
    this.allUser = response
  })
}

deleteUser(user: any)
{
  this._crud.deleteUser(user).subscribe(()=> {
    this.getlatestUser();
  })
}

editUser(user : any)
{
  this.isEdit=true;
  this.userObj = user;
}

updateUser() {
  this.isEdit= !this.isEdit;
  this._crud.updateUser(this.userObj).subscribe(() => {
    this.getlatestUser();
  })
}






}
