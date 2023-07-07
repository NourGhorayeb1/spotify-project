import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'callback', component: CallbackComponent },
  { path: 'artist-search', component: ArtistSearchComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CallbackComponent,
    ArtistSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
