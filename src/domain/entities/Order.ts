export class Order {
    constructor(
      public id: number,
      public items: { id: number; quantity: number; }[],
      public total: number
    ) {}
  }