import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscricion: Subscription;

  constructor() {
    // this.regresaObservable().pipe( retry(2) ).subscribe(
    // this.regresaObservable().subscribe(
      this.subscricion = this.regresaObservable().subscribe(
      numero => console.log('Sub ', numero),
      error => console.log('Error en subs ', error),
      () => console.error('El observador Terminó')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La página se va a cerrar');
    this.subscricion.unsubscribe();
  }


  regresaObservable(): Observable<any>{
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

        // if ( contador === 2 ) {
        //   clearInterval(intervalo);
        //   observer.error('Auxilio!');
        // }
      }, 1000);
    }).pipe(
        map( resp => resp.valor),
        filter( (valor, index) => {
          // console.log('Filtro:', valor, index);
          if ( ( valor % 2) === 1 ){
            // Impar
            return true;

          } else {
            // par
            return false;
          }
        })
    );


  }
}
