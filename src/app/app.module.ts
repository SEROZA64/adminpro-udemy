import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APPROUTING } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule } from '@angular/forms';

// Servicios
import { ServicioModule } from './servicios/servicio.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    PagesModule,
    FormsModule,
    ServicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
