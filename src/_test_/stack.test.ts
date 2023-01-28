import { Stack } from '../index';
const stack = new Stack();
beforeEach(() => {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
});

afterEach(() => {
  stack.clear();
});

describe('stack test', () => {
  it('toString', () => {
    expect(stack.toString()).toBe('1 2 3 4 5');
    stack.clear();
    expect(stack.toString()).toBe('');
  });

  it('clear', () => {
    stack.clear();
    expect(stack.toString()).toBe('');
  });

  it('push', () => {
    stack.push(10);
    stack.push(9);
    stack.push(8);
    expect(stack.toString()).toBe('1 2 3 4 5 10 9 8');
  });

  it('pop', () => {
    stack.pop();
    expect(stack.toString()).toBe('1 2 3 4');
    stack.pop();
    expect(stack.toString()).toBe('1 2 3');
    stack.pop();
    expect(stack.toString()).toBe('1 2');
  });

  it('peek', () => {
    expect(stack.peek()).toBe(5);
    stack.push(100);
    expect(stack.peek()).toBe(100);
    stack.pop();
    stack.pop();
    expect(stack.peek()).toBe(4);
    stack.clear();
    expect(stack.peek()).toBeNull();
  });

  it('isEmpty', () => {
    expect(stack.isEmpty()).toBeFalsy();
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
  });

  it('size', () => {
    expect(stack.size()).toBe(5);
    stack.push(1);
    stack.push(1);
    stack.push(1);
    expect(stack.size()).toBe(8);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.size()).toBe(4);
    stack.clear();
    expect(stack.size()).toBe(0);
  });
});
