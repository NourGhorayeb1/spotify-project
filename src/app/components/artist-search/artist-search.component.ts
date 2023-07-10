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
  searchQuery: any = '';
  artists: any[] = [];
  browsing_artists: boolean = false;
  registration_form: boolean = false;

  constructor(private spotifyService: SpotifyService, private router: Router) {
  }

  ngOnInit(): void {
    this.browsing_artists = false;
    this.registration_form = false;
  }

  searchArtists() {
    this.browsing_artists = true;
    this.registration_form = false;
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
    // this.router.navigate(['/add-new-artist']);
    this.searchQuery = "";
    this.browsing_artists = false;
    this.registration_form = true;
  }
}
