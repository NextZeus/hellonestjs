import { Injectable, Inject, forwardRef } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }
}
