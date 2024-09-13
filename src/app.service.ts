import { Injectable } from '@nestjs/common';
import { IAppService } from './interfaces/app.service';

@Injectable()
export class AppService implements IAppService {
  getHello(foo: string): string {
    return `Hello ${foo}!`;
  }
}
