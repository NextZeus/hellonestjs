import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from './config/config.module';
@Module({
  imports: [CatsModule, ConfigModule],
  controllers: [AppController, AdminController, AccountController],
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