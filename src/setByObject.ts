/**
 * 基于 js object 封装的 Set
 */

class SetByObject {
  items: any;
  constructor() {
    this.items = {};
  }

  add(value: any) {
    if (this.has(value)) return false;
    this.items[value] = value;
    return true;
  }

  has(value: any) {
    return Object.prototype.hasOwnProperty.call(this.items, value);
  }

  remove(value: any) {
    if (!this.has(value)) return false;
    delete this.items[value];
    return true;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.keys(this.items);
  }

  /**
   * 求并集
   * @param otherSet
   */
  union(otherSet: SetByObject) {
    const unionSet = new SetByObject();
    const values = this.values().concat(otherSet.values());

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  /**
   * 求交集
   * @param otherSet
   */
  intersect(otherSet: SetByObject) {
    const intersectSet = new SetByObject();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectSet.add(values[i]);
      }
    }

    return intersectSet;
  }

  /**
   * 求差集
   * @param otherSet
   */
  difference(otherSet: SetByObject) {
    const differenceSet = new SetByObject();
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  }

  /**
   * 判断子集
   */
  subset(otherSet: SetByObject) {
    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        return false;
      }
    }

    return true;
  }
}

export { SetByObject };
