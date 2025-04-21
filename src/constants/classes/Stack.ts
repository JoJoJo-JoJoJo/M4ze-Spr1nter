type StackSkeleton<T> = {
  push: (item: T) => void;
  pop(): T | undefined;
  size(): number;
  data(): T[];
};

class Stack<T> implements StackSkeleton<T> {
  private _data: T[] = [];

  // public constructor() {
  //   this._data = [];
  // }

  public push(item: T): void {
    this._data.push(item);
  }

  public pop(): T | undefined {
    return this._data.pop();
  }

  public size(): number {
    return this._data.length;
  }

  public data(): T[] {
    return this._data;
  }

  //? For data immutability:
  static imutUpdate = <T>(data: T[]): Stack<T> => {
    const newStack = new Stack<T>();
    data.forEach((d) => newStack.push(d));
    return newStack;
  };
}

export default Stack;
export type { StackSkeleton };
