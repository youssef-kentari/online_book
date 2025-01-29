export class Order {
  constructor(
    public id: number,
    public bookTitle: string,
    public orderDate: string,
    public status: 'Pending' | 'Completed' | 'Cancelled',
    public imageUrl: string
  ) {}
}
