import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cvExperience } from 'src/cvExperience';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor( private http: HttpClient) { }

  getExperiences() : Observable<cvExperience[]> {
    return this.http.get<cvExperience[]>("assets/experiences.json");
  }
}
