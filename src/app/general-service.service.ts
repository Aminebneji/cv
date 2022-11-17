import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {


  constructor() {

  }


  static modaleStuff() {
    const modaleWindow: any = document.querySelector('.modal');
    let btnOpen = document.querySelector('.button');
    let btnClose = document.querySelector('.close');

    function show() {

      modaleWindow.classList.remove('none');
      modaleWindow.classList.add('vision');
    };
    function hide() {
      modaleWindow.classList.add('none');
      modaleWindow.classList.remove('vision');
    };

    btnOpen?.addEventListener("click", show);
    btnClose?.addEventListener("click", hide);


    let button = document.querySelector('.submit')

    function sendMail() {
      console.log("SendMail")
      let form: any = document.querySelector('form');

      form.onSubmit = function (e: any) {
        e.preventDefault();

        let data = new FormData(form);

        fetch('http://localhost:4200', {
          method: 'POST',
          body: data
        })
          .then(res => res.json())
          .then(res => {
            console.log(res.message)
          })
          .catch(err => alert('Error : ' + err))
      }

    };
    button?.addEventListener("click", sendMail);

  }
}