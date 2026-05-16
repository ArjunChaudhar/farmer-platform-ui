import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  private apiUrl =
    `${environment.apiUrl}/farmers`;

  constructor(
    private http: HttpClient
  ) {
  }

  getFarmers() {
    return this.http.get(this.apiUrl);
  }

  addFarmer(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updateFarmer(id: number, data: any) {
    return this.http.put(
      `${this.apiUrl}/${id}`,
      data);
  }

  deleteFarmer(id: number) {
    return this.http.delete(
      `${this.apiUrl}/${id}`);
  }
}
