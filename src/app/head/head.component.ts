import { Component, Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  chemin: any = "/assets/moi.png";
  constructor() { }

  ngOnInit(): void {
  }

}
