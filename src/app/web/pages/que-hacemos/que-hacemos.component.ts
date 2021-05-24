import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-que-hacemos',
  templateUrl: './que-hacemos.component.html',
  styleUrls: ['./que-hacemos.component.scss']
})
export class QueHacemosComponent implements OnInit {

  public href: string = "";

  constructor(private router:Router , private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.href = this.router.url.split("?")[1].split("=")[1];
  }

}
