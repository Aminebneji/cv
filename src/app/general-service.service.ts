import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  private api = 'https://mailthis.to/Aminebneji'

  constructor(private http: HttpClient) {

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

  };

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
        }, (error: any) => {
          return error;
        }
      )
    )
  }
}