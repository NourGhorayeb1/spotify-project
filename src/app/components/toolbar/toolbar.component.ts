import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchArtist() {
    this.router.navigate(['/artist-search']);
  }

  addNewArtist() {
    this.router.navigate(['/add-new-artist']);
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
