import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  gotoMetro():void {
    this.route.navigateByUrl("/metro");
  }
}
