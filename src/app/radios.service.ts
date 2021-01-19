import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RadiosService {
  public allData:[];

  constructor(private http: HttpClient) {
    this.getCitiesStations().subscribe(data => {
      console.log(data);
    });
   }
  getCitiesStations(){
    return this.http.get(environment.apiUrl)
  }

}
