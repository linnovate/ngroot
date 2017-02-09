import { Component, OnInit, Input } from '@angular/core';
import { Request } from '../_classes/request';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  @Input() request: Request;
  documentName: string;
  onSubmit(): void {
      console.log("re",this.request);
  }
   handleInputChange(e) {
        let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        this.documentName = file.name;
    }

  constructor() {
   }

  ngOnInit() {
    console.log(this.request, 'sdsadfsdf');
  }

}
