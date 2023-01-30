/**
 * 哈希表
 */
class HashTable {
  storage: any[];
  count: number;
  limit: number;

  constructor() {
    this.storage = [];
    this.count = 0;
    this.limit = 7;
  }

  // 哈希函数
  hashFunction = (str: string, size: number) => {
    let hashCode = 0;
    // 霍纳算法，用于计算 hashCode 的值
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    // 缩小 hashCode 的范围
    return hashCode % size;
  };

  put(key: string, value: any) {
    const index = this.hashFunction(key, this.limit);
    let bucket = this.storage[index];
    if (bucket === undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.count += 1;
    // 动态扩容
    if (this.count > this.limit * 0.75) {
      this.resize(this.getPrime(this.limit * 2));
    }
  }

  get(key: string) {
    const index = this.hashFunction(key, this.limit);
    const bucket = this.storage[index];
    if (bucket === undefined) return null;
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return null;
  }

  remove(key: string) {
    const index = this.hashFunction(key, this.limit);
    const bucket = this.storage[index];

    if (bucket === undefined) return null;
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count -= 1;
        // 动态减少容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          this.resize(this.getPrime(this.limit * 2));
        }
        return tuple[i];
      }
    }
    return null;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  /**
   * 判断质数
   * @param num
   * @returns
   */
  isPrime(num: number) {
    const temp = Math.sqrt(num);
    for (let i = 2; i <= temp; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  /**
   * 获取质数
   * @param num
   * @returns
   */
  getPrime(num: number) {
    while (!this.isPrime(num)) {
      num += 1;
    }
    return num;
  }

  /**
   * 动态扩容
   * @param newLimit
   */
  resize(newLimit: number) {
    const oldStorage = this.storage;
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;
    for (let i = 0; i < oldStorage.length; i++) {
      const bucket = oldStorage[i];
      if (bucket === undefined) continue;
      for (let j = 0; j < bucket.length; j++) {
        const tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  }
}

export { HashTable };
