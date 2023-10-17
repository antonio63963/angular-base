import { Counter } from "./counter.component";

describe('counter component', () => {
  let component: Counter;

  beforeEach(() => {
    component = new Counter();
  });

  it('should increase count on 1', () => {
    component.increment();
    expect(component.count).toBe(1)
  });

  it('should be decrease on 1', () => {
    component.decrement();
    expect(component.count).toBe(-1)
  })

  it('should increase output on 1 by emitter', () => {
    let result: number = 0;
    component.counterEmmiter.subscribe(v => result = v);

    component.increment();
    expect(result).toBe(1);
  }) 
})