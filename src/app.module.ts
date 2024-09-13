import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { BasicQueryHandler } from './basic-query.handler';
import { AppService } from './app.service';
import { APP_SERVICE } from './interfaces/app.service';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    BasicQueryHandler,
    {
      provide: APP_SERVICE,
      useClass: AppService,
    },
  ],
})
export class AppModule {}
