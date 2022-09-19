import {message} from "./string";


xdescribe(`Strings' tests`, () => {

  it(`Should return an string`, () => {
    const response = message('Jordi');
    expect( typeof response ).toBe('string');
  });

  it(`Should return a greeting with the name sended`, () => {
    const name = 'Jordi';
    const response = message(name);
    expect( response ).toContain(name);
  });

});
