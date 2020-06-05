import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
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