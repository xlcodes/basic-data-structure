/**
 * 队列结构
 */
class Queue {
  items: unknown[];
  constructor() {
    this.items = [];
  }

  /**
   * 向队列尾部添加一个（或多个）新的项
   * @param item
   * @returns
   */
  enqueue(item: unknown[] | unknown) {
    if (Array.isArray(item)) {
      item.forEach((value) => {
        this.items.push(value);
      });
      return this.items.length;
    }
    return this.items.push(item);
  }

  /**
   * 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
   * @returns
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * 返回队列中的第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息与 Map 类的 peek 方法非常类似）
   * @returns
   */
  front() {
    return this.items[0];
  }

  /**
   * 如果队列中不包含任何元素，返回 true，否则返回 false
   * @returns
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 返回队列包含的元素个数，与数组的 length 属性类似
   * @returns
   */
  size() {
    return this.items.length;
  }

  /**
   * 将队列中的内容，转成字符串形式
   * @returns
   */
  toString() {
    let result = '';
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i] + ' ';
    }
    return result.trimEnd();
  }
}
export { Queue };
