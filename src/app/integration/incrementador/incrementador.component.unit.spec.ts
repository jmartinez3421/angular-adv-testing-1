import {IncrementadorComponent} from "./incrementador.component";

describe('IncrementadorComponent Unit', () => {

  let component: IncrementadorComponent;

  beforeEach(() => {
    component = new IncrementadorComponent();
  })

  it('the progress should not pass 100', function () {
    component.cambiarValor(5);
    expect(component.progreso).toBe(55);
  });

});
