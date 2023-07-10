import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-browsing-artists',
  templateUrl: './browsing-artists.component.html',
  styleUrls: ['./browsing-artists.component.css']
})
export class BrowsingArtistsComponent implements OnInit {

  @Input() artists!: any[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  viewAlbums(artistId: string) {
    const accessToken: any = localStorage.getItem('access_token');

    this.spotifyService.getArtistsAlbums(artistId, accessToken)
      .then(albums => {
        console.log(albums);
      })
      .catch(error => {
        console.error('Error retrieving artist albums:', error);
      });
  }

  getStarRating(popularity: number): number[] {
    const maxRating = 5;
    const filledStars = Math.ceil(popularity / 20); // (20 points per star)
    const emptyStars = maxRating - filledStars;

    return Array(filledStars).fill(true).concat(Array(emptyStars).fill(false));
  }
}
