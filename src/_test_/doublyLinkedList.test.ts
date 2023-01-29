import { DoublyLinkedList } from '../index';

const linked = new DoublyLinkedList();

beforeEach(() => {
  linked.append('10');
  linked.append('20');
  linked.append('30');
});

afterEach(() => {
  linked.head = null;
  linked.tail = null;
  linked.length = 0;
});

describe('doublyLinkedList test', () => {
  it('overflow', () => {
    expect(linked.overflow(-1)).toBeTruthy();
    expect(linked.overflow(0)).toBeFalsy();
    expect(linked.overflow(100)).toBeTruthy();
  });

  it('append', () => {
    // length !== 0
    linked.append('40');
    expect(linked.length).toBe(4);
    expect(linked.toString()).toBe('10 20 30 40');

    // length === 0
    linked.head = null;
    linked.tail = null;
    linked.length = 0;
    linked.append('10');
    expect(linked.length).toBe(1);
    expect(linked.toString()).toBe('10');
  });

  it('insert', () => {
    // 异常
    expect(linked.insert(-1, 'error')).toBeFalsy();
    // 头部插入
    expect(linked.insert(0, 'head')).toBeTruthy();
    // 尾部插入
    expect(linked.insert(linked.length, 'tail')).toBeTruthy();
    // 中间插入
    expect(linked.insert(3, 'middle')).toBeTruthy();
    expect(linked.length).toBe(6);

    // 第一次添加
    linked.head = null;
    linked.tail = null;
    linked.length = 0;
    expect(linked.insert(9, 'first')).toBeFalsy();
    expect(linked.length).toBe(0);

    expect(linked.insert(0, 'first')).toBeTruthy();
    expect(linked.length).toBe(1);
  });

  it('get', () => {
    // 异常
    expect(linked.get(-100)).toBeNull();
    expect(linked.get(linked.length + 1)).toBeNull();

    linked.append('40');
    linked.append('50');
    linked.append('60');
    linked.append('70');
    linked.append('80');

    expect(linked.get(2)).toBe('30');
    expect(linked.get(7)).toBe('80');
  });

  it('indexOf', () => {
    expect(linked.indexOf('-10')).toBe(-1);
    expect(linked.indexOf('10')).toBe(0);
  });

  it('update', () => {
    expect(linked.update(-1, 'new data')).toBeFalsy();
    expect(linked.update(linked.length + 1, 'new data')).toBeFalsy();
    linked.append('40');
    linked.append('50');
    linked.append('60');
    linked.append('70');
    linked.append('80');

    expect(linked.update(0, 'hello world')).toBeTruthy();
    expect(linked.get(0)).toBe('hello world');
    expect(linked.update(1, 'hello world')).toBeTruthy();
    expect(linked.get(1)).toBe('hello world');
    expect(linked.update(2, 'hello world')).toBeTruthy();
    expect(linked.get(2)).toBe('hello world');

    expect(linked.update(7, 'world hello')).toBeTruthy();
    expect(linked.get(7)).toBe('world hello');
    expect(linked.update(5, 'world hello')).toBeTruthy();
    expect(linked.get(5)).toBe('world hello');
  });

  it('removeAt', () => {
    expect(linked.removeAt(-1)).toBeNull();
    expect(linked.removeAt(linked.length + 1)).toBeNull();

    linked.append('40');
    linked.append('50');
    linked.append('60');

    expect(linked.removeAt(0)).toBe('10');
    expect(linked.removeAt(linked.length - 1)).toBe('60');
    expect(linked.removeAt(1)).toBe('30');
    expect(linked.length).toBe(3);

    linked.head = null;
    linked.tail = null;
    linked.length = 0;
    linked.append('first');
    expect(linked.removeAt(0)).toBe('first');
    expect(linked.length).toBe(0);
  });

  it('remove', () => {
    expect(linked.remove('100000')).toBeNull();
    expect(linked.remove('20')).toBe('20');
    expect(linked.length).toBe(2);
  });

  it('forwardString', () => {
    expect(linked.forwardString()).toBe('10 20 30');
  });

  it('toString', () => {
    expect(linked.toString()).toBe('10 20 30');
  });

  it('backwardString', () => {
    expect(linked.backwardString()).toBe('30 20 10');
  });

  it('size', () => {
    expect(linked.size()).toBe(3);
  });

  it('isEmpty', () => {
    expect(linked.isEmpty()).toBeFalsy();

    linked.head = null;
    linked.tail = null;
    linked.length = 0;

    expect(linked.isEmpty()).toBeTruthy();
  });
});
