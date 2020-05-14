import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers: HttpHeaders = new HttpHeaders(
      {
        Authorization: 'Bearer BQBjJphUmNXMOihz7-hOKQox0ibPR2fcYODGuAghVtgx6IdxeFfSKs8cH4DOSzki6c-SXv_cJ_aO2SrOD4U'
      }
    );

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: headers });
  }
}
