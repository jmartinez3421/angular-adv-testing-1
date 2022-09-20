import {Routes} from "@angular/router";
import {HospitalComponent} from "../../integration/hospital/hospital.component";
import {MedicosComponent} from "../../medium/spies/medicos.component";
import {IncrementadorComponent} from "../../integration/incrementador/incrementador.component";

export const routes: Routes = [
  {path: 'hospital', component: HospitalComponent},
  {path: 'medico/:id', component: MedicosComponent},
  {path: '**', component: IncrementadorComponent}
]
