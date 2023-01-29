import { Queue } from '.';

interface IQueueItem {
  element: unknown;
  priority: number;
}

class QueueElement {
  element: IQueueItem['element'];
  priority: IQueueItem['priority'];

  constructor({ element, priority }: IQueueItem) {
    this.element = element;
    this.priority = priority;
  }
}

/**
 * 优先级队列
 */
class PriorityQueue extends Queue {
  items: IQueueItem[];
  constructor() {
    super();
    this.items = [];
  }
  enqueue({ element, priority }: IQueueItem) {
    const queueElement = new QueueElement({ element, priority });
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i]?.priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
    return this.items.length;
  }
  /**
   * 将队列中的内容，转成字符串形式
   * @returns
   */
  toString() {
    let result = '';
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i].element + ' ';
    }
    return result.trimEnd();
  }
}

export { PriorityQueue };
