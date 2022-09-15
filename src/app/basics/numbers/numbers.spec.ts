import {increment} from "./numbers";

describe(`Numbers' tests`, () => {
  it('Should return 100 if the number sended is bigger than 100', () => {
    const num = 150;
    const response = increment(num);
    expect(response).toBe(100);
  });

  it(`Should return the number sended incremented in one if it's smaller than 100`, () => {
    const num = 80;
    const response = increment(num);
    expect( response ).toBe(num + 1);
  })
});
