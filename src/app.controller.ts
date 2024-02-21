import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getAllUser')
  getAllUser(): string {
    return this.appService.getAllUser();
  }

  @Get('/getUser')
  getUser(): string {
    return this.appService.getUser();
  }

  @Get('/addUser')
  addUser(): string {
    return this.appService.addUser();
  }

  @Get('/updateUserInfo')
  updateUserInfo(): string {
    return this.appService.updateUserInfo();
  }
  @Get('/deleteUser')
  deleteUser(): string {
    return this.appService.deleteUser();
  }
}
