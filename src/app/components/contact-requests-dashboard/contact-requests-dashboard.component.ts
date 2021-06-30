import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-requests-dashboard',
  templateUrl: './contact-requests-dashboard.component.html',
  styleUrls: ['./contact-requests-dashboard.component.scss']
})
export class ContactRequestsDashboardComponent implements OnInit {

  columnDefs = [
    { headerName: 'Id solicitare', field: 'id', filter: true, sortable: true, resizable: true },
    { headerName: 'Email solicitant', field: 'email', filter: true, sortable: true, resizable: true},
    { headerName: 'Conținut', field: 'body', filter: true, sortable: true, resizable: true},
    { headerName: 'Data înregistrare', field: 'date', filter: true, sortable: true, resizable: true},
  ];

  rowData = [
    { id: '1001', email: 'admin@yahoo.com', body: 'Solicitarea nr 1', date: '2021-06-15 12:12'},
    { id: '1002', email: 'student1@yahoo.com', body: 'Solicitarea nr 123123', date: '2021-06-17 13:13'},
    { id: '1003', email: 'student2@yahoo.com', body: 'Solicitarea nr 112321321', date: '2021-06-15 12:13'},
    { id: '1004', email: 'student3@yahoo.com', body: 'Solicitarea nr 112312321', date: '2021-06-15 12:15'},
    { id: '1005', email: 'student4@yahoo.com', body: 'Solicitarea nr 112321321321', date: '2021-06-16 10:16'},
    { id: '1006', email: 'prof1@yahoo.com', body: 'Solicitarea asdasd', date: '2021-06-15 12:16'},
    { id: '1007', email: 'student87@yahoo.com', body: 'Solicitarea nr 1122', date: '2021-06-15 12:17'},
    { id: '1008', email: 'student22@yahoo.com', body: 'Solicitarea nr 11122', date: '2021-06-16 10:18'},
    { id: '1009', email: 'prof1@yahoo.com', body: 'Solicitare test', date: '2021-06-15 12:19'},
    { id: '1010', email: 'prof1@yahoo.com', body: 'Solicitare test', date: '2021-06-15 12:20'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
