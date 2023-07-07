import { Component, OnInit } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  spotifyApi: any = new SpotifyWebApi();
  searchQuery: string = '';
  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {

  }

  searchArtists() {

    const accessToken = localStorage.getItem('access_token');

    // this.spotifyService.getQuery("hello");

    if (accessToken && this.searchQuery.length > 0) {
      this.spotifyService.searchArtists(this.searchQuery, accessToken)
        .then((response: any) => {
          this.artists = response.artists.items;
        })
        .catch((error: any) => {
          console.error('Error searching artists:', error);
        });
    } else {
      this.artists = [];
    }

  }

  viewAlbums(artistId: string) {

  }
}
