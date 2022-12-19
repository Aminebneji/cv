import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

  FormData!: FormGroup;

  constructor(private service: GeneralServiceService, private builder: FormBuilder) { }

  onSubmit(FormData: FormGroup) {
    console.log(FormData)
    this.service.PostMessage(FormData).subscribe(rep => {
      location.href = 'https://mailthis.to/confirm'
      console.log(rep)
    })
  }

  ngOnInit() {

    this.FormData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Firstname: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required]),
      Email: new FormControl('', ([Validators.required, Validators.email])),
      messageContent: new FormControl('', [Validators.required])
    })


    GeneralServiceService.modaleStuff();
  };




}











