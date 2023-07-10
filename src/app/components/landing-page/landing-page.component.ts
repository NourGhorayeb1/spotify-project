import { Component, OnInit } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  spotifyApi: any = new SpotifyWebApi();

  constructor(private router: Router) {
    // this.spotifyApi.setClientId("clientID")
  }

  ngOnInit(): void {

  }

  loginWithSpotify(): void {
    const clientId = environment.spotifyClientId;
    const redirectUri = environment.redirectUrl;
    const scopes = [
      'user-read-private',
      'user-read-email',
    ];

    const state = this.generateRandomString(16);
    const authUrl = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + encodeURIComponent(clientId) +
      '&scope=' + encodeURIComponent(scopes.join(' ')) +
      '&redirect_uri=' + encodeURIComponent(redirectUri) +
      '&state=' + encodeURIComponent(state);

    window.location.href = authUrl;
  }

  generateRandomString(length: number): string {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';

    for (let i = 0; i < length; i++) {
      text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    return text;
  }

  handleSuccessfulLogin(): void {
    // REDIRECT TO THE ARTIST SEARCH PAGE
    this.router.navigate(['/home']);
  }

}
