import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

import {RedisModule} from 'nestjs-redis'
import {RedisLockModule} from 'nestjs-simple-redis-lock'
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    RedisModule.forRootAsync({
      useFactory: () => ({
        host: '127.0.0.1',
        port: 6379,
        db: 0,
        password: '',
        keyPrefix: 'lock:',
      }),
    }),
    RedisLockModule.register({
    }),
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //consumer.apply(LoggerMiddleware).forRoutes({ path: '', method: RequestMethod.GET });
    // ?+*() Regexp Route
    //consumer.apply(LoggerMiddleware).forRoutes({ path: 'ab*cd', method: RequestMethod.ALL});
    // consumer.apply(LoggerMiddleware, xxxMiddleware, xxxMiddleware)
    consumer.apply(LoggerMiddleware)
    // .exclude({path: '', method: RequestMethod.GET})
    .forRoutes('');
  }
}