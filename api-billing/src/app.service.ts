import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './dto/get-user.request.dto';
import { OrderCreatedEvent } from './events/order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreateEvent: OrderCreatedEvent) {
    console.log('[TEST]', orderCreateEvent)
    this.authClient
      .send('get_user', new GetUserRequest(orderCreateEvent.userId))
      .subscribe((user) =>  {
        console.log('[USER]', user)
      })
  }
}
