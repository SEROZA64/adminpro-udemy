import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../servicios/servicio.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(color: string, link: any){
    this.aplicarCheck(link);
    this.ajustes.aplicarTema(color);
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for ( let selector of selectores ){
      selector.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this.ajustes.ajustes.tema;
    for ( let selector of selectores ){
      if (selector.getAttribute('data-theme') === tema) {
        selector.classList.add('working');
        break;
      }
    }

    
  }

}
