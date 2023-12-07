import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './dto/get-user.request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '1234',
      stripeUserId: '65432'
    },
    {
      userId: '4321',
      stripeUserId: '234567'
    },
  ]

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId)
  }
}
