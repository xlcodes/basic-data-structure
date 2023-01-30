/* eslint-disable no-console */
import { SetByObject } from '../index';

const set = new SetByObject();

const testObj = { name: '小林' };
const testFc = () => {
  console.log('hello world');
};

beforeEach(() => {
  set.add(1);
  set.add('hello');
  set.add(['1', '2', '3']);
  set.add(testObj);
  set.add(testFc);
});

afterEach(() => {
  set.clear();
});

describe('set by object', () => {
  it('add', () => {
    set.add('test');
    expect(set.values().length).toBe(6);
  });

  it('has', () => {
    expect(set.has('hello')).toBeTruthy();
    expect(set.has(testObj)).toBeTruthy();
    expect(set.has(testFc)).toBeTruthy();
    expect(
      set.has(() => {
        console.log('hello world');
      })
    ).toBeFalsy();
    expect(set.has('world')).toBeFalsy();
  });

  it('remove', () => {
    expect(set.remove('world')).toBeFalsy();
    expect(set.remove('hello')).toBeTruthy();
  });

  it('clear', () => {
    set.clear();
    expect(set.values()).toEqual([]);
  });

  it('size', () => {
    expect(set.size()).toBe(5);
    set.clear();
    expect(set.size()).toBe(0);
  });

  it('values', () => {
    set.clear();
    expect(set.values()).toEqual([]);
    set.add('1');
    set.add('2');
    set.add('3');
    expect(set.values()).toEqual(['1', '2', '3']);
  });

  describe('集合扩展方法测试', () => {
    const set1 = new SetByObject();
    const set2 = new SetByObject();
    beforeEach(() => {
      set1.add('1');
      set1.add('2');
      set1.add('3');
      set1.add('4');
      set1.add('5');

      set2.add('001');
      set2.add('2');
      set2.add('3');
      set2.add('004');
      set2.add('5');
    });

    afterEach(() => {
      set1.clear();
      set2.clear();
    });

    it('union', () => {
      expect(set1.union(set2).values()).toEqual([
        '1',
        '2',
        '3',
        '4',
        '5',
        '001',
        '004',
      ]);
    });

    it('intersect', () => {
      expect(set1.intersect(set2).values()).toEqual(['2', '3', '5']);
    });

    it('difference', () => {
      expect(set1.difference(set2).values()).toEqual(['1', '4']);
    });

    it('subset', () => {
      const set3 = new SetByObject();

      set3.add('1');
      set3.add('2');
      set3.add('3');
      set3.add('4');
      set3.add('5');
      set3.add('6');

      expect(set1.subset(set2)).toBeFalsy();
      expect(set1.subset(set3)).toBeTruthy();

      set3.clear();
    });
  });
});
