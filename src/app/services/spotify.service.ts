import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const queryfull = `https://api.spotify.com/v1/${query}`;
    const headers: HttpHeaders = new HttpHeaders(
      {
        Authorization: 'Bearer BQB23aTLPSERfZR2M5Rh0fIoyxeDTZ-Q8w2Im1IPw-byUbFeKJEsBST4e5GyfayNYaamiZUxzKlTaVQVXbY'
      }
    );

    return this.http.get(queryfull, { headers: headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));
  }
}
