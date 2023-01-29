import { PriorityQueue } from '../index';
const queue = new PriorityQueue();

beforeEach(() => {
  queue.enqueue({ element: 1, priority: 1 });
  queue.enqueue({ element: 2, priority: 2 });
  queue.enqueue({ element: 3, priority: 3 });
  queue.enqueue({ element: 4, priority: 4 });
  queue.enqueue({ element: 5, priority: 5 });
  queue.enqueue({ element: 6, priority: 6 });
});

afterEach(() => {
  queue.items = [];
});

describe('PriorityQueue test', () => {
  it('enqueue', () => {
    expect(queue.enqueue({ element: '000', priority: 2 })).toBe(7);
    expect(queue.toString()).toBe('1 2 000 3 4 5 6');
    expect(queue.enqueue({ element: '-111', priority: -1 })).toBe(8);
    expect(queue.toString()).toBe('-111 1 2 000 3 4 5 6');
    expect(queue.enqueue({ element: '100', priority: 100 })).toBe(9);
    expect(queue.toString()).toBe('-111 1 2 000 3 4 5 6 100');
  });
  it('toString', () => {
    expect(queue.toString()).toBe('1 2 3 4 5 6');
  });
});
