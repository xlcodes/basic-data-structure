/**
 * 栈结构
 */
class Stack {
  items: unknown[];
  constructor() {
    this.items = [];
  }
  /**
   * 添加一个新元素到栈顶位置。
   * @param element 入栈元素
   */
  push(element: unknown) {
    this.items.push(element);
  }
  /**
   * 移除栈顶的元素，同时返回被移除的元素。
   */
  pop() {
    return this.items.pop();
  }
  /**
   * 获取栈顶元素，不修改原栈结构
   * @returns unknown/null 栈顶元素
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }
  /**
   * 判断栈元素是否为空
   * @returns boolean
   */
  isEmpty() {
    return this.size() === 0;
  }
  /**
   * 返回栈元素个数
   */
  size() {
    return this.items.length;
  }
  /**
   * 清除所有栈元素
   */
  clear() {
    this.items = [];
  }
  /**
   * 将栈结构的内容以字符串的形式返回。
   * @returns string
   */
  toString() {
    let res = '';
    this.items.forEach((element, index) => {
      res += index === this.items.length - 1 ? element : element + ' ';
    });
    return res;
  }
}

export { Stack };
