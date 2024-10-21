export class Order {
    constructor(
      public id: number,
      public items: string[],
      public total: number
    ) {}
  }