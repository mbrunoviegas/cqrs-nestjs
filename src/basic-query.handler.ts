import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BasicQuery } from './queries/basic-query';
import { Inject } from '@nestjs/common';
import { APP_SERVICE, IAppService } from './interfaces/app.service';

@QueryHandler(BasicQuery)
export class BasicQueryHandler implements IQueryHandler<BasicQuery, string> {
  constructor(
    @Inject(APP_SERVICE)
    private readonly appService: IAppService,
  ) {}

  async execute(query: BasicQuery): Promise<string> {
    return this.appService.getHello(query.foo);
  }
}
