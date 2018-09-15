import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'DashBoard',
          url: '/dashboard',
        },
        {
          titulo: 'Progreso',
          url: '/progress',
        },
        {
          titulo: 'Gráficas',
          url: '/graficas1',
        },
        {
          titulo: 'Promesas',
          url: '/promesas',
        },
        {
          titulo: 'Rxjs',
          url: '/rxjs',
        }
      ]
    }
  ];

  constructor() { }
}
