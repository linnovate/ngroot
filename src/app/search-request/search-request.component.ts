import { Component, OnInit } from '@angular/core';
import { Request } from '../_classes/request';
import { RequestsService } from '../_services/requests.service'

// const REQUESTS: Request[] = [
//   new Request('entrance pass','סיכום שנתי','Summary Annual Activity northern arena',  'received','15.2.2014'),
//   new Request('IT support','דוח זיצ"פ','', 'completed','15.2.2014'),
//   new Request('document distribution','תיקון מדפסת', '', 'active', '15.2.2014')
// ];

@Component({
  selector: 'search-request',
  templateUrl: './search-request.component.html',
  styleUrls: ['./search-request.component.css']
})
export class SearchRequestComponent implements OnInit {

  errorMessage: string;
  requests: Request[];
  mode = 'Observable';

  // requests = REQUESTS;

  // selectedRequest =  this.requests[0];
  // onSelect(request: Request): void {;
  //   this.selectedRequest = request;
  // }

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.requestsService.get()
                     .subscribe(
                       requests => this.requests = requests,
                       error =>  this.errorMessage = <any>error);
  }

}
