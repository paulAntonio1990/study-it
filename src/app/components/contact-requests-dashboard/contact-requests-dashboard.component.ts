import { Component, OnInit } from '@angular/core';
import {ContactRequestService} from "../../services/contact-request.service";
import {CsvExportParams} from "ag-grid-community";
import {DateService} from "../../services/date.service";

@Component({
  selector: 'app-contact-requests-dashboard',
  templateUrl: './contact-requests-dashboard.component.html',
  styleUrls: ['./contact-requests-dashboard.component.scss']
})
export class ContactRequestsDashboardComponent implements OnInit {

  columnDefs = [
    { headerName: 'Id solicitare', field: 'id', filter: true, sortable: true, resizable: true },
    { headerName: 'Email solicitant', field: 'email', filter: true, sortable: true, resizable: true},
    { headerName: 'Conținut', field: 'content', filter: true, sortable: true, resizable: true},
    { headerName: 'Data înregistrare', field: 'date', valueFormatter: this.dateFormatter ,filter: true, sortable: true, resizable: true},
  ];

  rowData: any;
  api: any;

  constructor(private contactRequestService: ContactRequestService,
              private dateService: DateService) { }

  ngOnInit(): void {
    this.loadContactRequests();
  }

  loadContactRequests() {
    this.contactRequestService.findAllContactRequests().subscribe(
      contactRequests => this.rowData = contactRequests
    )
  }

  dateFormatter(params: any) {
    if (params && params.data && params.data.date) {
      const dateAsString = params.data.date;
      const dateParts = dateAsString.split('T');
      return `${dateParts[0]}`;
    }
    return '';
  }

  onExport() {
    const params = {
      fileName: 'export_contact_requests_' + this.dateService.getTodayAsString()
    } as CsvExportParams;

    this.api.exportDataAsCsv(params);
  }

  onGridReady($event: any) {
    this.api = $event.api;
  }
}
