/**
 * 节点对象
 */
class NodeItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  next: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

/**
 * 链表
 */
class LinkedList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  head: any;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * 判断元素位置是否溢出
   * @param position 元素位置
   * @returns 溢出返回 true，否则返回 false
   */
  overflow(position: number) {
    return position < 0 || position > this.length;
  }

  /**
   * 向链表尾部添加一个新的项。
   * @param data
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  append(data: any) {
    const newNode = new NodeItem(data);
    // 链表为空
    if (this.length === 0) {
      this.head = newNode;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let current: any = this.head;
      // 指针后移
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length += 1;
  }

  /**
   * 在指定位置插入元素
   * @param position 指定位置
   * @param data 插入元素
   * @returns 成功返回 true 否则返回 false
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  insert(position: number, data: any) {
    if (this.overflow(position)) return false;
    const newNode = new NodeItem(data);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let prev = null;
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      newNode.next = current;
      prev.next = newNode;
    }
    this.length += 1;
    return true;
  }

  /**
   * 返回元素在链表中的索引。
   * @param data 查找的元素
   * @returns 当前元素所在位置。如果链表中没有该元素就返回-1。
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  indexOf(data: any) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      } else {
        current = current.next;
        index++;
      }
    }
    return -1;
  }

  /**
   * 查找指定位置的元素值
   * @param position 元素所在位置
   * @returns 返回当前元素的值，不存在返回 false
   */
  get(position: number) {
    if (this.overflow(position)) return false;
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  }

  /**
   * 更新指定位置的元素值
   * @param position 指定位置
   * @param newData 新的元素值
   * @returns 更新成功返回 true，否则返回 false
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update(position: number, newData: any) {
    if (this.overflow(position)) return false;
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = newData;
    return true;
  }

  /**
   * 从链表的特定位置移除一项。
   * @param position 元素位置
   * @returns 被删除的元素
   */
  removeAt(position: number) {
    if (this.overflow(position)) return null;
    let current = this.head;
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let prev = null;
      let index = 0;
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.length -= 1;
    return current.data;
  }

  /**
   * 删除指定元素
   * @param data 指定元素
   * @returns 当前删除的元素
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  remove(data: any) {
    const position = this.indexOf(data);
    return this.removeAt(position);
  }

  /**
   *  打印链表值
   * @returns string
   */
  toString() {
    let current = this.head;
    let res = '';
    while (current) {
      res += current.data + ' ';
      current = current.next;
    }
    return res.trimEnd();
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

export { LinkedList };
