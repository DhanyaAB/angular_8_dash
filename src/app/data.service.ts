import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  isSidebarPinned = false;
  isSidebarToggeled = false;

  constructor(private http: HttpClient) { }
  toggleSidebar() {
    this.isSidebarToggeled = !this.isSidebarToggeled;
  }

  toggleSidebarPin() {
    this.isSidebarPinned = !this.isSidebarPinned;
  }
  views(): Observable<any> {
    return this.http.get("http://127.0.0.1:5001/jobs");
  }

  jobnames(view): Observable<any> {
    return this.http.get<any>("http://127.0.0.1:5001/jobs/"+view);
  }
  jobbuilds(job): Observable<any> {
    return this.http.get<any>("http://127.0.0.1:5001/jobs/buildnumber/"+job);
  }

}
