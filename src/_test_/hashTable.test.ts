import { HashTable } from '../hashTable';
const ht = new HashTable();

beforeEach(() => {
  ht.put('abc', '111');
  ht.put('cba', '222');
  ht.put('nba', '333');
});

afterEach(() => {
  ht.remove('abc');
  ht.remove('cba');
  ht.remove('nba');
});

describe('hashTable', () => {
  it('HashFunction', () => {
    expect(ht.hashFunction('abc', 7)).toBe(4);
    expect(ht.hashFunction('cba', 7)).toBe(3);
    expect(ht.hashFunction('nba', 7)).toBe(5);
    expect(ht.hashFunction('mba', 7)).toBe(1);
  });

  it('get', () => {
    expect(ht.get('abc')).toBe('111');
    expect(ht.get('ab')).toBeNull();
    expect(ht.get('demo')).toBeNull();
  });

  it('put', () => {
    ht.put('hello', 'hello');
    expect(ht.get('hello')).toBe('hello');
    ht.put('hello', 'hello123');
    expect(ht.get('hello')).toBe('hello123');
    ht.remove('hello');
    for (let i = 0; i < 15; i++) {
      ht.put(`key_${i}`, i);
    }
    expect(ht.limit).not.toBe(7);
    for (let j = 0; j < 15; j++) {
      ht.remove(`key_${j}`);
    }
  });

  it('remove', () => {
    expect(ht.remove('test')).toBeNull();
    expect(ht.remove('abc')).toBe('abc');
    expect(ht.remove('javascript')).toBeNull();
    // 异常情况
    ht.put('test', 'test0000000');
    const index = ht.hashFunction('test', ht.limit);
    const bucket = ht.storage[index];
    for (let i = 0; i < bucket.length; i++) {
      bucket[i][0] = 'demo';
    }
    expect(ht.remove('test')).toBeNull();
    for (let i = 0; i < bucket.length; i++) {
      bucket[i][0] = 'test';
    }
    expect(ht.remove('test')).toBe('test');
  });

  it('isEmpty', () => {
    expect(ht.isEmpty()).toBeFalsy();
    ht.remove('abc');
    ht.remove('cba');
    ht.remove('nba');
    expect(ht.isEmpty()).toBeTruthy();
  });

  it('size', () => {
    expect(ht.size()).toBe(3);
    ht.remove('abc');
    ht.remove('cba');
    ht.remove('nba');
    expect(ht.size()).toBe(0);
  });

  it('isPrime', () => {
    expect(ht.isPrime(100)).toBeFalsy();
    expect(ht.isPrime(7)).toBeTruthy();
  });

  it('getPrime', () => {
    expect(ht.getPrime(5)).toBe(5);
    expect(ht.getPrime(6)).toBe(7);
  });
});
