import {Player} from "./classes";

xdescribe(`Classes' tests`, () => {

  let player = new Player();

  // beforeAll(); //Runs before all tests
  beforeEach(() => {
    player = new Player();
  }); //Runs before each test

  // afterAll(); //Runs after all tests are finished
  // afterEach(); //Runs after each test

  it('should return 80hp if takes 20 damage', () => {
    const response = player.takesDamage(20);

    expect(response).toBe(80);
  });

  it('should return 80hp if takes 20 damage', () => {
    const response = player.takesDamage(50);

    expect(response).toBe(50);
  });

  it('should return 0 if the damage is higger than the hp', () => {
    const response = player.takesDamage(2000);

    expect(response).toBe(0);
  });
});
