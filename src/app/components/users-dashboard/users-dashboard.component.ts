import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {

  columnDefs = [
    { field: 'id', filter: true, sortable: true, resizable: true },
    { field: 'username', filter: true, sortable: true, resizable: true },
    { field: 'email', filter: true, sortable: true, resizable: true},
    { field: 'role', filter: true, sortable: true, resizable: true}
  ];

  rowData = [
    { id: '1', username: 'admin', email: 'admin@yahoo.com', role: 'ROLE_ADMIN' },
    { id: '2', username: 'student1', email: 'student1@yahoo.com', role: 'ROLE_STUDENT' },
    { id: '3', username: 'student2', email: 'student2@yahoo.com', role: 'ROLE_STUDENT' },
    { id: '4', username: 'student3', email: 'student3@yahoo.com', role: 'ROLE_STUDENT' },
    { id: '5', username: 'student4', email: 'student4@yahoo.com', role: 'ROLE_STUDENT' },
    { id: '6', username: 'prof1', email: 'prof1@yahoo.com', role: 'ROLE_PROFESOR' },
    { id: '7', username: 'student87', email: 'student87@yahoo.com', role: 'ROLE_STUDENT' },
    { id: '8', username: 'student22', email: 'student22@yahoo.com', role: 'ROLE_STUDENT' },
    { id: '9', username: 'prof1', email: 'prof1@yahoo.com', role: 'ROLE_PROFESOR' },
    { id: '10', username: 'prof1', email: 'prof1@yahoo.com', role: 'ROLE_PROFESOR' },
    { id: '11', username: 'student007', email: 'student007@yahoo.com', role: 'ROLE_STUDENT' },
    { id: '12', username: 'student1122', email: 'student1122@yahoo.com', role: 'ROLE_STUDENT' },
    { id: '13', username: 'student123', email: 'student123@yahoo.com', role: 'ROLE_STUDENT' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
