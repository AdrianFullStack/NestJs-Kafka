import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order-request.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './events/order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka
  ) {}

  getHello(): string {
    return 'Hello World!';
  }


  createOrder({ userId, price }: CreateOrderRequest) {
    this.billingClient.emit('order_created', new OrderCreatedEvent('12345', userId, price))
  }
}
