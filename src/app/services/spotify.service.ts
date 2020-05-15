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
        Authorization: 'Bearer BQDKT6bBHhkKQ12PkJT4cR7HfDlY-QfYQPaAl_vtxW1loH68pAK6HkWjW8cMsxwdzWNgm3oAUL-Bdwh8qLs'
      }
    );

    return this.http.get(queryfull, { headers: headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }

}
