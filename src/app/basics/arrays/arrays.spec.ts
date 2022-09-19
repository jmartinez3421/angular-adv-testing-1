import {getRobots} from "./arrays";

xdescribe(`Arrays' tests`, () => {
  it('should return at least 3 robots', () => {
    const response = getRobots();
    expect(response.length).toBeGreaterThanOrEqual(3);
  });

  it('should exist Megaman and Ultron in the response', () => {
    const response = getRobots();
    expect(response).toContain('Megaman');
    expect(response).toContain('Ultron');
  })
})
