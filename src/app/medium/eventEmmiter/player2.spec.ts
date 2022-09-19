import {Player2} from "./player2";

describe(`EventEmitter's tests`, () => {
  let player: Player2;

  beforeEach(() => {
    player = new Player2();
  })

  it('should emit an event when takes damage', () => {

    let newHp = 0;

    player.hpChanges.subscribe( hp => {
      newHp = hp;
    });

    player.takesDamage(1000);

    expect(newHp).toBe(0);
  });

  it('should emit an event when takes damage and survive if it least than 100', () => {

    let newHp = 0;

    player.hpChanges.subscribe( hp => {
      newHp = hp;
    });

    player.takesDamage(50);

    expect(newHp).toBe(50);
  });
});
