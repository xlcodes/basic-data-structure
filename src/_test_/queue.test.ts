import { Queue } from '../index';
const queue = new Queue();

beforeEach(() => {
  queue.enqueue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

afterEach(() => {
  queue.items = [];
});

describe('queue', () => {
  it('enqueue', () => {
    expect(queue.enqueue(1)).toBe(11);
    expect(queue.enqueue([1, 2, 3, 4])).toBe(15);
  });

  it('dequeue', () => {
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
  });

  it('front', () => {
    expect(queue.front()).toBe(1);
  });

  it('isEmpty', () => {
    expect(queue.isEmpty()).toBeFalsy();
    queue.items = [];
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('size', () => {
    expect(queue.size()).toBe(10);
  });
  it('toString', () => {
    expect(queue.toString()).toBe('1 2 3 4 5 6 7 8 9 10');
  });
});
