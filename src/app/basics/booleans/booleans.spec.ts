import {falseFunction, userLogged} from "./booleans";

describe(`Boolean's tests`, () => {
  it('Should return true',  () => {
      const response = userLogged();
      expect(response).toBeTruthy();
  });

  it('Should return false', () => {
    const response = falseFunction();
    expect(response).toBeFalsy();
  });
})
