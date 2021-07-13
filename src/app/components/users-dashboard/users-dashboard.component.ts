import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {CsvExportParams} from "ag-grid-community";
import {DateService} from "../../services/date.service";

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
  api: any;

  constructor(private userService: UserService,
              private dateService: DateService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.findAllUsers().subscribe(users => this.rowData = users)
  }

  onExport() {
    const params = {
      fileName: 'export_users_data_' + this.dateService.getTodayAsString()
    } as CsvExportParams;

    this.api.exportDataAsCsv(params);
  }

  onGridReady($event: any) {
    this.api = $event.api;
  }
}
