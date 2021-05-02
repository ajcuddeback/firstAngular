import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// Find httpClient documentation here: https://angular.io/guide/http
// httpClient quick refrence guide: https://angular.io/api/common/http/HttpClient

@Injectable({
  providedIn: 'root'
})

// This service will be used to handle an http call for multiple different api's
export class HttpService {

  // This is the constructor funtion that allows us to import HttpClient and be able to use it in our components.
  constructor(private http: HttpClient) { }

  // This method takes in a url and will return an Observable which you can then subscribe to when using this method in another component...
  getRequest(url: string): Observable<any> {
    // Return the observable from the get request, use .pipe to catch an error if there is one. If there is. Call the handleError method.
    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }

  // The posr request takes in 3 arguments. the url, any data being passed(the body) and any options like headers.
  postRequest(url: string, data: any, option?: any): Observable<any> {
    // Return an observable once we post data. Use the .pipe to catch any errors and handle them with the handleError method
    return this.http.post(url, data, option).pipe(
      catchError(this.handleError)
    )
  }

  updateRequest(url: string, data: any, option?: any): Observable<any> {
    return this.http.put(url, data, option).pipe(
      catchError(this.handleError)
    )
  }

  // This handle error method will handle any errors from a request.
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
