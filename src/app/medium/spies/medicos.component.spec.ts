import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {EMPTY, from, throwError} from "rxjs";


describe('MedicosComponent', () => {

    let component: MedicosComponent;
    const service = new MedicosService(null as any);

    beforeEach( () => {
      component = new MedicosComponent(service);
    });


    it('OnInit should load the Medicos', () => {
      const medicos = ['medico1', 'medico2', 'medico3'];

      spyOn(service, 'getMedicos').and.callFake(() => {
        return from([medicos]);
      });

      component.ngOnInit();

      expect(component.medicos.length).toBeGreaterThan(0);
    });

  it('should call the server to add a Medico', () => {
    const spy = spyOn(service, 'agregarMedico').and.callFake((medico) => {
      return EMPTY;
    })

    component.agregarMedico();

    expect(spy).toHaveBeenCalled();
  });

  it('should add a new Medico to the Medicos Array', () => {
    const medico = {id: 1, name: 'Juan'};

    spyOn(service, 'agregarMedico').and.returnValue(from([medico]));

    component.agregarMedico();

    // expect(component.medicos.length).toBe(1);
    expect(component.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('if the add fails, the property mensajeError shoud be equal to the error of the service', () => {
    const myError = 'The Medico could not be added';

    spyOn(service, 'agregarMedico').and.returnValue(throwError(() => new Error(myError)))

    component.agregarMedico();

    expect(component.mensajeError).toBe(myError);
  });

  it('should call the server to delete a Medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);

    const spy = spyOn(service, 'borrarMedico').and.returnValue(EMPTY);

    component.borrarMedico('1');

    expect(spy).toHaveBeenCalledWith('1');
  });

  it('should not call the server to delete a Medico', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    const spy = spyOn(service, 'borrarMedico').and.returnValue(EMPTY);

    component.borrarMedico('1');

    expect(spy).not.toHaveBeenCalledWith('1');
  });
});
