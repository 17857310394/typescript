
type EventHandler<T> = (data: T) => void;

export class MyEvent<T> {
  private handlers: EventHandler<T>[] = [];

  subscribe(handler: EventHandler<T>) {
    this.handlers.push(handler);
  }

  unsubscribe(handler: EventHandler<T>) {
    const index = this.handlers.indexOf(handler);
    if (index !== -1) {
      this.handlers.splice(index, 1);
    }
  }

  fire(data: T) {
    this.handlers.forEach(handler => handler(data));
  }
}
