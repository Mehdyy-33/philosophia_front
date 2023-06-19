import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mouvement } from '../models/mouvement.model';

@Injectable({
  providedIn: 'root'
})
export class MouvementService {
  private apiUrl = 'http://localhost:8080/movements'; // Remplacez par votre URL d'API appropriée

  constructor(private http: HttpClient) { }

  getAllMovements(): Observable<Mouvement[]> {
    return this.http.get<Mouvement[]>(this.apiUrl);
  }

  getMovementById(id: number): Observable<Mouvement> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Mouvement>(url);
  }

  createMovement(movement: Mouvement): Observable<Mouvement> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Mouvement>(url, movement);
  }

  updateMovement(movement: Mouvement): Observable<Mouvement> {
    const url = `${this.apiUrl}/update/${movement.id}`;
    return this.http.put<Mouvement>(url, movement);
  }

  deleteMovement(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }
}
