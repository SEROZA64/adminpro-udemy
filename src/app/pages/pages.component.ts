import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      mensaje => console.log('La promesa terminó.', mensaje)
    ).catch (
      error => console.error('Error en la promesa ', error)
    );
  }

  ngOnInit() {
    init_plugins();
  }

  contarTres(): Promise<boolean> {

    return new Promise( ( resolve, reject ) => {
      let contador: number = 0;
      let intervalo = setInterval( () => {
         contador += 1;
         console.log( contador );
         if (contador === 3 ) {
              resolve(true);
              clearInterval(intervalo);
         }
      }, 1000 );
    });


  }

}
