/**
 * 字典结构
 * 基于 Object 实现 Map
 */
class Dictionary {
  items: Record<string, any>;
  constructor() {
    this.items = {};
  }

  /**
   * 向字典中添加新元素
   * @param key
   * @param value
   */
  set(key: string, value: any) {
    this.items[key] = value;
  }

  /**
   * 通过使用键值来从字典中移除键值对应的数据值
   * @param key
   */
  remove(key: string) {
    if (!this.has(key)) return false;
    delete this.items[key];
    return true;
  }

  /**
   * 如果某个键值存在于这个字典中，则返回 true，反之则返回 false
   * @param key
   * @returns
   */
  has(key: string) {
    return Object.prototype.hasOwnProperty.call(this.items, key);
  }

  /**
   * 通过键值查找特定的数值并返回
   * @param key
   */
  get(key: string) {
    return this.has(key) ? this.items[key] : undefined;
  }

  /**
   * 将这个字典中的所有元素全部删除
   */
  clear() {
    this.items = {};
  }

  /**
   * 返回字典所包含元素的数量。与数组的 length 属性类似
   * @returns
   */
  size() {
    return this.keys().length;
  }

  /**
   * 将字典所包含的所有键名以数组形式返回
   * @returns
   */
  keys() {
    return Object.keys(this.items);
  }

  /**
   * 将字典所包含的所有数值以数组形式返回
   * @returns
   */
  values() {
    return Object.values(this.items);
  }
}

export { Dictionary };
