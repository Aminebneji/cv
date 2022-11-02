import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { GeneralServiceService } from './general-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curriculum-vitae';

} 

GeneralServiceService.modaleStuff;



