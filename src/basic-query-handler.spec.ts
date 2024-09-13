import Mocked = jest.Mocked;
import { TestBed } from '@suites/unit';
import { BasicQueryHandler } from './basic-query.handler';
import { AppService } from './app.service';
import { BasicQuery } from './queries/basic-query';
import { APP_SERVICE, IAppService } from './interfaces/app.service';

describe('BasicQueryHandler', () => {
  let handler: BasicQueryHandler;
  let appService: Mocked<AppService>;

  beforeEach(async () => {
    const { unit, unitRef } =
      await TestBed.solitary(BasicQueryHandler).compile();
    handler = unit;
    appService = unitRef.get<IAppService>(APP_SERVICE);
  });

  it('should return "Hello World!"', async () => {
    appService.getHello.mockReturnValue('Hello MB!');
    const result = await handler.execute(new BasicQuery('World'));
    expect(result).toBe('Hello MB!');
  });
});
