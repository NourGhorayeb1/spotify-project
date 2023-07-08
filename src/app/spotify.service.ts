import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // The BASE_URL SHOULD THE BASE URL OF THE SPOTIFY API
  static BASE_URL = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }

  searchArtists(query: string, accessToken: string) {
    const url = `${SpotifyService.BASE_URL}/search`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    const params = new HttpParams()
      .set('q', query)
      .set('type', 'artist');

    return this.http.get(url, { headers: headers, params: params }).toPromise();

  }

  getArtistsAlbums(artistID: string, accessToken: string) {
    const url = `${SpotifyService.BASE_URL}/artists/${artistID}/albums`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get(url, { headers }).toPromise();
  }
}