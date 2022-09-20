import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MedicosComponent} from "./medium/spies/medicos.component";
import { DoctorComponent } from './integration/doctor/doctor.component';
import {IncrementadorComponent} from "./integration/incrementador/incrementador.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "./advanced/routes/app.routes";
import {NavbarComponent} from "./advanced/navbar/navbar.component";
import { RouterMedicoComponent } from './advanced/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    DoctorComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
