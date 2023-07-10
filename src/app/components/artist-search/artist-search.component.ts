import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyService } from 'src/app/spotify.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  spotifyApi: any = new SpotifyWebApi();
  searchQuery: any = '';
  artists: any[] = [];

  private searchTerms = new Subject<string>();

  constructor(private spotifyService: SpotifyService, private router: Router) {
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((term: string) => {
      this.searchArtists(term);
    });
  }

  searchArtists(query: string) {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken && query.length > 0) {
      this.spotifyService.searchArtists(query, accessToken)
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

  searchInputChange(query: string) {
    this.searchTerms.next(query);
  }
}
