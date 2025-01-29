import { Component } from '@angular/core';
import {ORDERS} from '../../model/order-data';
import {Order} from '../../model/order';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Order[] = ORDERS;

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'status-pending';
      case 'Completed':
        return 'status-completed';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  }
}
