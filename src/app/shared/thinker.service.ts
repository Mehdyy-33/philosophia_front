import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thinker } from '../models/thinker.model';

@Injectable({
  providedIn: 'root'
})
export class ThinkerService {
  private apiUrl = 'http://localhost:8080/thinkers'; // Remplacez par votre URL d'API appropriée

  constructor(private http: HttpClient) { }

 
  getAllThinkers(): Observable<Thinker[]> {
    return this.http.get<Thinker[]>(this.apiUrl);
  }

  getThinkerById(id: number): Observable<Thinker> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Thinker>(url);
  }

  createThinker(thinker: Thinker): Observable<Thinker> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Thinker>(url, thinker);
  }

  updateThinker(thinker: Thinker): Observable<Thinker> {
    const url = `${this.apiUrl}/update/${thinker.id}`;
    return this.http.put<Thinker>(url, thinker);
  }

  deleteThinker(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}
