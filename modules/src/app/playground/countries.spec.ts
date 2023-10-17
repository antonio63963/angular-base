import { countries } from "./countries"

describe('countries', () => {

  it('should include Country', () => {
    const result = countries();

    expect(result).toContain('RU');
    expect(result).toContain('BY');
  })
})