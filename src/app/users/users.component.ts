import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor( private userService:UsersService ) { }
  userList:any;

  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe((usersData)=>
    {
      this.userList=usersData;

    })
  }

}
