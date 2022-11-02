import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
 
  GeneralServiceService.modaleStuff();
   

  }; 

 
}











