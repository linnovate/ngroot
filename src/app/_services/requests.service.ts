import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Request } from '../_classes/request';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestsService {

  private requestsUrl = 'http://root.hrm.demo.linnovate.net/api/tasks';  // URL to web API

  constructor(private http: Http) { }

  get (): Observable<Request[]> {

const token = 'eyJhbGciOiJIUzI1NiJ9.JTdCJTIyX192JTIyOjAsJTIyaWQlMjI6JTIyb3JpdEBsaW5ub3ZhdGUubmV0JTIyLCUyMm5hbWUlMjI6JTIyT3JpdCUyMFBlcnNpayUyMiwlMjJlbWFpbCUyMjolMjJvcml0QGxpbm5vdmF0ZS5uZXQlMjIsJTIydXNlcm5hbWUlMjI6JTIyb3JpdCUyMiwlMjJfaWQlMjI6JTIyNTg5YjIxNjNkOGQ0NmExMzAwMTdkMjY1JTIyLCUyMnByb3ZpZGVyJTIyOiUyMmxvY2FsJTIyLCUyMnJvbGVzJTIyOiU1QiUyMmF1dGhlbnRpY2F0ZWQlMjIlNUQlN0Q.mvO-7y3jGOYqsUC1wE-NmiAC_uyoDYgO-0Ck5HS6_u8';

const headers = new Headers();
    
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(this.requestsUrl, { headers})
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
