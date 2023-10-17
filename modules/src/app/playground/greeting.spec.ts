import { greeting } from "./greeting"

describe('greeting', () => {

  it('should contain input in result', () => {
    const result = greeting('Angular');

    expect(result).toContain('Angular')
  })
} )