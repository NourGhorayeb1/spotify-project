import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // RETRIEVE THE ACCESS TOKEN FROM THE URL
    const fragment: any = this.route.snapshot.fragment;
    const token = this.extractTokenFromFragment(fragment);

    // STORE THE ACCESS TOKEN SECURELY
    localStorage.setItem('access_token', token);

    // console.log(localStorage);

    this.router.navigate(['/home']);
  }

  private extractTokenFromFragment(fragment: string): string {

    const tokenRegex = /access_token=([^&]+)/;
    const matches = tokenRegex.exec(fragment);
    const token = matches ? matches[1] : '';

    return token || '';
  }

  // getParamValue(params: URLSearchParams, paramName: string): string | null {
  //   const paramValue = params.get(paramName);
  //   return paramValue ? decodeURIComponent(paramValue) : null;
  // }

}
