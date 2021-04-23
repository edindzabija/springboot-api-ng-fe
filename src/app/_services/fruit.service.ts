import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from '../_models/fruit';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FruitService {
  constructor(private http: HttpClient) {}

  public getFruit(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(environment.apiUrl);
  }

  public addFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(environment.apiUrl, fruit);
  }

  public updateFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.put<Fruit>(environment.apiUrl, fruit);
  }

  public deleteFruit(fruitId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}${fruitId}`);
  }
}
