import { Injectable } from '@angular/core'; 


@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {
 

  constructor() { 
    
   } 

   
  static modaleStuff(){
    const modaleWindow: any = document.querySelector('.modal');
    let btnOpen = document.querySelector('.button');
    let btnClose = document.querySelector('.submit');


    function show() {

      modaleWindow.classList.remove('none');
      modaleWindow.classList.add('vision');
    };

    function hide() {
      modaleWindow.classList.add('none');
      modaleWindow.classList.remove('vision');    
    }

    btnOpen?.addEventListener("click", show);
    btnClose?.addEventListener("click", hide); 
  }
   
}
