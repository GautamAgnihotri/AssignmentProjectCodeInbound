import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAllUser(): string {
    return "Get data of all users"
  }
  getUser(): string {
    return "Get User"
  }
  addUser(): string {
    return "User added"
  }
  updateUserInfo(): string{
    return "User detail updated"
  }
  deleteUser(): string {
    return "user deleted"
  }

}
