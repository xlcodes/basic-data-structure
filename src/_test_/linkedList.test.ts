import { LinkedList } from '../index';

const linked = new LinkedList();

beforeEach(() => {
  linked.append('10');
  linked.append('20');
  linked.append('30');
});

afterEach(() => {
  linked.head = null;
  linked.length = 0;
});

describe('linkedList test', () => {
  it('toString', () => {
    expect(linked.toString()).toBe('10 20 30');
  });

  it('append', () => {
    linked.append('40');
    linked.append('50');
    linked.append('60');
    linked.append('70');
    expect(linked.toString()).toBe('10 20 30 40 50 60 70');
  });

  it('insert', () => {
    expect(linked.insert(0, '000')).toBeTruthy();
    expect(linked.insert(3, '300')).toBeTruthy();
    expect(linked.insert(2, '200')).toBeTruthy();
    expect(linked.insert(100, '10000')).toBeFalsy();
    expect(linked.toString()).toBe('000 10 200 20 300 30');
  });

  it('overflow', () => {
    expect(linked.overflow(-1)).toBeTruthy();
    expect(linked.overflow(1)).toBeFalsy();
    expect(linked.overflow(100)).toBeTruthy();
  });

  it('indexOf', () => {
    expect(linked.indexOf('10')).toBe(0);
    expect(linked.indexOf('30')).toBe(2);
    expect(linked.indexOf('50')).toBe(-1);
  });

  it('get', () => {
    expect(linked.get(0)).toBe('10');
    expect(linked.get(2)).toBe('30');
    expect(linked.get(100)).toBeFalsy();
  });

  it('update', () => {
    expect(linked.update(2, 'new 30')).toBeTruthy();
    expect(linked.update(100, 'new data')).toBeFalsy();
    expect(linked.toString()).toBe('10 20 new 30');
  });

  it('removeAt', () => {
    linked.removeAt(2);
    expect(linked.toString()).toBe('10 20');
  });

  it('remove', () => {
    linked.remove('10');
    expect(linked.toString()).toBe('20 30');
    linked.remove('50');
    expect(linked.toString()).toBe('20 30');
  });

  it('size', () => {
    expect(linked.size()).toBe(3);
    linked.remove('10');
    linked.remove('20');
    linked.remove('30');
    expect(linked.size()).toBe(0);
  });

  it('isEmpty', () => {
    expect(linked.isEmpty()).toBeFalsy();
    linked.remove('10');
    linked.remove('20');
    linked.remove('30');
    expect(linked.isEmpty()).toBeTruthy();
  });
});
