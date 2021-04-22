import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from '../_models/fruit';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class FruitService {
  constructor(private http: HttpClient) {}

  public getFruit(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(environment.apiUrl, { headers: {
        Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsM2s5NHA1YzFPVnFCT0JfZXh3YkJOUWZDbDJQQWM5OEpYTXMyWkx4bXZjIn0.eyJleHAiOjE2MTkxMjIxMjksImlhdCI6MTYxOTEyMTgyOSwianRpIjoiNmUyYTQ0MjgtMTY0Ni00MmVmLThiNDktMDcyN2JkNzBmMDM5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MTgwL2F1dGgvcmVhbG1zL2NvZGVjdGEiLCJhdWQiOlsicmVhY3Qtc3ByaW5nIiwiYWNjb3VudCJdLCJzdWIiOiI2NjljNzUyNC0yZDU4LTRhNmYtOTlkNC02ZWM5MzE4ODY2MmYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzcHJpbmctZnJ1aXQiLCJzZXNzaW9uX3N0YXRlIjoiY2MwNjAwOWUtMWZlZC00OWNlLTg0ZDctZjM5N2JmOTlmNmE1IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsic3ByaW5nLWZydWl0Ijp7InJvbGVzIjpbInVzZXIiXX0sInJlYWN0LXNwcmluZyI6eyJyb2xlcyI6WyJ1c2VyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3QwMDMifQ.Dv6pCoWO-7hVnluTZ-YevfRxFKcArx_kdj5Ya5Hgo84ubbI27YbFuxZYRezlqumfKP0TtkcPZ3gKGRFATXIRsTBJMcxEDge0cjxTLBB6iGx-VD52TtzWZNpdUWMDE9JlQi0yrgHlf1tW4KbXOIoTDVdPVpa1fp00S5VQHeXQltUkGCcBjYMG93jgPvC9w8Ft-ugSuvrZg2PhYI_G1XGYjVODmd2WexM2sXFcfO-H8-ZMVabZTxsUxamCfd9SiaLGeBvc_BgKqrdLhalEmnkwA8pH_s_FcKo0YCS2qX-Nqk0dM4sz_tfiwRvs7deMtqwMZWsxX_4r44kzD7DhR6zZPQ'
    } });
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
