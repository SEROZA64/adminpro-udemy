import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  // @Input permite mandar datos del componente padre (progress) al componente hijo (incrementador)
  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  // @Output permite obtener datos del componente hijo (incrementador) en el componente padre (progress)
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda:', this.leyenda);
    // console.log('Progreso:', this.progreso);
   }

  ngOnInit() {
    // console.log('Leyenda:', this.leyenda);
    // console.log('Progreso:', this.progreso);
  }
  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0)
      {
        this.progreso = 100;
        return;
      }

    if (this.progreso <= 0 && valor < 0)
      {
        this.progreso = 0;
        return;
      }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );
  }

  onChange( newValue: number ) {
    console.log('newValue:', newValue);
    // let elementoHtml: any = document.getElementsByName('progreso')[0];

    if ( newValue >= 100  )
      {
        this.progreso = 100;
      } else if ( newValue <= 0  )
        {
          this.progreso = 0;
        } else if ( newValue == null  )
            {
              this.progreso = 0;
            } else
                {
                  this.progreso = newValue;
                }
          // elementoHtml = Number ( this.progreso );
          this.txtProgress.nativeElement.value = this.progreso;
          this.cambioValor.emit( this.progreso );
          this.txtProgress.nativeElement.focus();
  }
}
