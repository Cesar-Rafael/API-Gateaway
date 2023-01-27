export class TransactionCreatedEvent {
  constructor(
    public readonly a: string,
    public readonly b: string,
    public readonly c: number,
    public readonly d: number,
  ) {}

  toString() {
    return JSON.stringify({
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
    });
  }
}
