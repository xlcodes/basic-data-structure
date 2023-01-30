import { Dictionary } from '../index';

const map = new Dictionary();

const hobby = ['js', 'ts', 'node.js'];
const sayHello = () => {
  return `Hello, I am ${map.get('name')}!`;
};

beforeEach(() => {
  map.set('name', 'xiaolin');
  map.set('age', 18);
  map.set('hobby', hobby);
  map.set('sayHello', sayHello);
});

afterEach(() => {
  map.clear();
});

describe('dictionary', () => {
  it('set', () => {
    map.set('test', '测试数据');
    expect(map.get('test')).toBe('测试数据');
    map.set('test', 'new test');
    expect(map.get('test')).toBe('new test');
  });

  it('remove', () => {
    expect(map.remove('test')).toBeFalsy();
    expect(map.remove('age')).toBeTruthy();
    expect(map.has('age')).toBeFalsy();
  });

  it('has', () => {
    expect(map.has('test')).toBeFalsy();
    expect(map.has('age')).toBeTruthy();
  });

  it('get', () => {
    expect(map.get('name')).toBe('xiaolin');
    expect(map.get('test')).toBeUndefined();
  });

  it('clear', () => {
    map.clear();
    expect(map.size()).toBe(0);
  });

  it('keys', () => {
    expect(map.keys()).toEqual(['name', 'age', 'hobby', 'sayHello']);
  });

  it('values', () => {
    expect(map.values()).toEqual(['xiaolin', 18, hobby, sayHello]);
  });
});
