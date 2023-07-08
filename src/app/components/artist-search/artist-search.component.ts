import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private spotifyService: SpotifyService, private router: Router) {
  }

  ngOnInit(): void {

  }

  searchArtists() {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken && this.searchQuery.length > 0) {
      this.spotifyService.searchArtists(this.searchQuery, accessToken)
        .then((response: any) => {
          this.artists = response.artists.items;
          console.log(this.artists)
        })
        .catch((error: any) => {
          console.error('Error searching artists:', error);
        });
    } else {
      this.artists = [];
    }
  }

  addNewArtist() {
    this.router.navigate(['/add-new-artist']);
  }
}
