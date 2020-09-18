import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Covid19Service {
  //dataUrl = 'https://github.com/pcm-dpc/COVID-19/raw/master/dati-json/dpc-covid19-ita-regioni-latest.json';
  dataUrl = '/api/covid-ita/dpc-covid19-ita-regioni-latest.json';

  rawData = null;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
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
    return throwError('Something bad happened; please try again later.');
  }

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
