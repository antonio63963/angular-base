import {compute} from './compute';

describe('computer', () => {

  it('should return 0 if negative input', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })
  it('should increase input if positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  })

})