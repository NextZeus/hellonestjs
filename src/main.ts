process.env.GAME_ENV = 'dev';
process.env.NODE_ENV = 'development';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ShutdownSignal } from '@nestjs/common';
import { AllExceptionFilter } from './common/filters/all-exceptions.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { RolesGuard } from './common/guards/roles.guard';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('');
  // 全局异常处理 统一返回 {error, errorMsg, serverTime}
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalFilters(new AllExceptionFilter());
  // app.useGlobalPipes((
  //   new ValidationPipe({
  //     transform: true, // 将 plain object 转化为对应的 dto class 对象
  //     disableErrorMessages:  true,
  //     whitelist: true, // 过滤掉所有 DTO 中未定义的属性
  //     forbidNonWhitelisted: true, // 不允许传递 DTO 中未定义的属性，否则会抛出异常
  //     forbidUnknownValues: true, // 文档中建议打开，但这个开关具体什么意思没弄明白
  //   })
  // ))
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  // 没有异常时，统一设置给调用方传递 { error, errorMsg, serverTime }
  app.useGlobalInterceptors(new ResponseInterceptor());

  // graceful shutdown
  process.on(ShutdownSignal.SIGINT, async () => {
    await app.close();
    process.exit(0);
  });
  await app.listen(3000);
  console.log('app is listening on http://localhost:3000')

  // send ready signal to PM2
  if (typeof process.send === 'function') {
    process.send('ready');
    console.info('app bootstrap succeed, send ready signal to PM2');
  }
}
bootstrap();
