import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly serverUrl = 'https://api-dev.sonect.io/';

  constructor(private http: HttpClient) {}

  private setParams(reqParams: any) {
    let params = new HttpParams();
    Object.keys(reqParams).forEach((key) => {
      params = params.append(key, String(reqParams[key]));
    });
    
    return params;
  }

  get<T>(url: string, reqParams?: any) {
    const requesturl = this.serverUrl + url;

    let params = this.setParams(reqParams);

    return this.http
      .get<T>(requesturl, { params })
      .pipe(catchError(this.handleError));
  }

  post<T>(url: string, body: any, httpOptions?: any) {
    const requesturl = this.serverUrl + url;

    if (httpOptions) {
      return this.http
        .post<T>(requesturl, body, httpOptions)
        .pipe(catchError(this.handleError));
    } else {
      return this.http
        .post<T>(requesturl, body)
        .pipe(catchError(this.handleError));
    }
  }

  delete(url: string) {
    const requesturl = this.serverUrl + url;

    return this.http.delete(requesturl).pipe(catchError(this.handleError));
  }

  put(url: string, body: any) {
    const requesturl = this.serverUrl + url;

    return this.http.put(requesturl, body).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404 && error.error.message) {
      alert(error.error.message);
    }

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
