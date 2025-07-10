class ListNode<k, v> {
  key: k;
  value: v;
  next: ListNode<k, v> | null;

  constructor(key: k, value: v) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashMapWIthLinkedListWithoutCollsionHandling<k, v> {
  private buckets: Array<ListNode<k, v> | null>;
  private size: number;

  constructor(size: number = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null);
  }

  private hash(key: k): number {
    const strKey = String(key);
    let hash = 0;
    for (let i = 0; i < strKey.length; i++) {
      hash = (hash + strKey.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key: k, value: v): void {
    // This does not handle collisions
    // It will overwrite the value if the key already exists
    const index = this.hash(key);
    let newNode = new ListNode(key, value);
    this.buckets[index] = newNode;
  }

  get(key: k): v | undefined {
    const index = this.hash(key);
    let current = this.buckets[index];

    if (current && current.key === key) {
      return current.value;
    }

    return undefined;
  }

  remove(key: k): void {
    const index = this.hash(key);
    const current = this.buckets[index];
    if (current && current.key === key) {
      this.buckets[index] = null;
    }
  }
}
