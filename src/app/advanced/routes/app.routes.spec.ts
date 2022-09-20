import {routes} from "./app.routes";
import {MedicosComponent} from "../../medium/spies/medicos.component";

describe('Principal Routes', () => {
  it('should exist the route /medico/:id', () => {
    expect(routes).toContain({path: 'medico/:id', component: MedicosComponent});
  });
});
