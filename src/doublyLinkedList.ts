class NodeItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  prev: NodeItem | null;
  next: NodeItem | null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(data: any) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  head: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tail: any;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
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
   * 向链表尾部追加一个新元素
   * @param data 添加元素的值
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  append(data: any) {
    const newNode = new NodeItem(data);
    if (this.size() === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * 向链表的指定位置插入一个新元素
   * @param position 插入位置
   * @param data 插入数据
   * @returns 是否插入成功
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  insert(position: number, data: any) {
    if (this.overflow(position)) return false;
    const newNode = new NodeItem(data);
    if (this.size() === 0) {
      // 第一次添加
      this.head = newNode;
      this.tail = newNode;
    } else {
      switch (position) {
        // 在头部插入
        case 0:
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
          break;
        // 在尾部插入
        case this.length:
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
          break;
        // 在中间插入 eg: 0 < position < this.length
        default:
          // eslint-disable-next-line no-case-declarations
          let current = this.head;
          // eslint-disable-next-line no-case-declarations
          let index = 0;
          // 找到要插入的位置
          while (index++ < position) {
            current = current.next;
          }
          // 新节点的 next 指向要插入位置的节点(current)
          newNode.next = current;
          // 新节点的 prev 指向 current 的 prev
          newNode.prev = current.prev;
          // 将新节点与 当前节点的 前一个节点的 next建立关系
          current.prev.next = newNode;
          // 让newNode成为current的前一个节点
          current.prev = newNode;
      }
    }

    this.length++;
    return true;
  }

  /**
   * 获取指定位置的元素
   * @param position 元素所在位置
   * @returns null or 当前元素的值
   */
  get(position: number) {
    if (this.overflow(position)) return null;
    if (Math.floor(this.length / 2) > position) {
      // 从前往后遍历
      let index = 0,
        current = this.head;
      while (index++ < position) {
        current = current.next;
      }
      return current.data;
    } else {
      // 从后往前遍历
      let index = this.length - 1,
        current = this.tail;
      while (index-- > position) {
        current = current.prev;
      }
      return current.data;
    }
  }

  /**
   * 获取指定元素在链表中的位置
   * @param data 查找的元素
   * @returns position or -1
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  indexOf(data: any) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  /**
   * 修改指定位置上的元素
   * @param position 修改的位置
   * @param data 新的值
   * @returns 是否修改成功
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update(position: number, data: any) {
    if (this.overflow(position)) return false;
    let index, current;
    if (Math.floor(this.length / 2) > position) {
      // 从前往后遍历
      index = 0;
      current = this.head;
      while (index++ < position) {
        current = current.next;
      }
    } else {
      // 从后往前遍历
      index = this.length - 1;
      current = this.tail;
      while (index-- > position) {
        current = current.prev;
      }
    }
    current.data = data;
    return true;
  }

  /**
   * 从链表中的删除指定位置的元素
   * @param position 删除元素位置
   * @returns 被删除的元素值 or null
   */
  removeAt(position: number) {
    if (this.overflow(position)) return null;
    let current = this.head;

    // 只有一个节点
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        current.next.prev = current.prev;
        current.prev.next = current.next;
      }
    }

    this.length -= 1;
    return current.data;
  }

  /**
   * 从链表删除指定的元素
   * @param data 被删除元素的值
   * @returns 被删除的元素值 or null
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  remove(data: any) {
    const position = this.indexOf(data);
    return this.removeAt(position);
  }

  /**
   * 返回正向遍历节点字符串形式
   */
  forwardString() {
    let current = this.head;
    let res = '';
    while (current) {
      res += current.data + ' ';
      current = current.next;
    }
    return res.trimEnd();
  }

  /**
   * 返回反向遍历的节点的字符串形式
   */
  backwardString() {
    let current = this.tail;
    let res = '';
    while (current) {
      res += current.data + ' ';
      current = current.prev;
    }
    return res.trimEnd();
  }

  /**
   * 打印双向链表的值
   */
  toString() {
    return this.forwardString();
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

export { DoublyLinkedList };
