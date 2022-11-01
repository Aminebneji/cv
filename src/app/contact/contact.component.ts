import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {

    const modaleWindow: any = document.querySelector('.modal');
    let btnOpen = document.querySelector('.button');
    let btnClose = document.querySelector('.submit');


    function show() {

      modaleWindow.classList.remove('none');
      modaleWindow.classList.add('vision');
      console.log('yo')
      console.log(modaleWindow)


    };

    function hide() {
      modaleWindow.classList.add('none');
      modaleWindow.classList.remove('vision');
      console.log('yo')
      console.log(modaleWindow)
    }

    btnOpen?.addEventListener("click", show);
    btnClose?.addEventListener("click", hide)

  };
}











