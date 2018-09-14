import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SettingsService, SharedService, SidebarService} from './servicio.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],
  declarations: []
})
export class ServicioModule { }
