import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAvailableComponent } from './list-available/list-available.component';
import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { ContactComponent } from './contact/contact.component';
import { MediosPagoComponent } from './medios-pago/medios-pago.component';
import { ComprarComponent } from './comprar/comprar.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';

const routes: Routes = [
  { path: 'list-available', component: ListAvailableComponent },
  { path: 'index', component: IndexComponent },
  { path: 'app', component: AppComponent },
  { path: 'preguntas', component: PreguntasFrecuentesComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'medios-pago', component: MediosPagoComponent },
  { path: 'comprar', component: ComprarComponent },
  { path: 'aviso-privacidad', component: AvisoPrivacidadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
