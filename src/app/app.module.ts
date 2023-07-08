import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';
import { BrowsingArtistsComponent } from './components/browsing-artists/browsing-artists.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'artist-search', component: ArtistSearchComponent },
  { path: 'browsing-artists/:artistId', component: BrowsingArtistsComponent },
  { path: 'add-new-artist', component: RegisterFormComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CallbackComponent,
    ArtistSearchComponent,
    BrowsingArtistsComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
