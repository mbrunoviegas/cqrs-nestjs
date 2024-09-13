import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { BasicQuery } from './queries/basic-query';

@Controller()
export class AppController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  getHello(): Promise<string> {
    return this.queryBus.execute(new BasicQuery('World'));
  }
}
