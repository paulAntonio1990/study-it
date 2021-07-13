import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {

  columnDefs = [
    { field: 'id', filter: true, sortable: true, resizable: true },
    { field: 'userName', filter: true, sortable: true, resizable: true },
    { field: 'email', filter: true, sortable: true, resizable: true},
    { field: 'role', filter: true, sortable: true, resizable: true}
  ];

  rowData: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.findAllUsers().subscribe(users => this.rowData = users)
  }

}
