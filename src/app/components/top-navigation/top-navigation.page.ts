import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.page.html',
  styleUrls: ['./top-navigation.page.scss'],
})
export class TopNavigationPage implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {}
}
