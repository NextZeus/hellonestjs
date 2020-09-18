import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('TYPEORM_DATABASE_HOST'),
        port: +configService.get<number>('TYPEORM_DATABASE_PORT'),
        username: configService.get<string>('TYPEORM_DATABASE_USERNAME'),
        password: configService.get<string>('TYPEORM_DATABASE_PASSWORD'),
        database: configService.get<string>('TYPEORM_DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('TYPEORM_MYSQL_DATABASE_HOST'),
        port: +configService.get<number>('TYPEORM_MYSQL_DATABASE_PORT'),
        username: configService.get<string>('TYPEORM_MYSQL_DATABASE_USERNAME'),
        password: configService.get<string>('TYPEORM_MYSQL_DATABASE_PASSWORD'),
        database: configService.get<string>('TYPEORM_MYSQL_DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    CatsModule, 
    AuthModule
  ],
  controllers: [AppController, AdminController, AccountController],
  providers: [AppService, UsersService],
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