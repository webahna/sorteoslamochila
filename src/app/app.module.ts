import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediosPagoComponent } from './medios-pago/medios-pago.component';
import { IndexComponent } from './index/index.component';
import { ListAvailableComponent } from './list-available/list-available.component';
import { ContactComponent } from './contact/contact.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { ComprarComponent } from './comprar/comprar.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    MediosPagoComponent,
    IndexComponent,
    ListAvailableComponent,
    ContactComponent,
    NosotrosComponent,
    PreguntasFrecuentesComponent,
    ComprarComponent,
    AvisoPrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
