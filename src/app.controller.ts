import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ConfigService} from './config/config.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    var name: string
    try {
      name = await this.configService.getName(' xiaodong')
    } catch (error){
      console.error("err=====", error.message)
    } finally {
      console.log('done')
    }

    try {
      var a = await this.configService.test1()
      var b = await this.configService.test2()  

      console.log("a", a)
      console.log("b", b)
    } catch (error) {
      console.error("errrrrr", error);      
    }
    
    
    return this.appService.getHello() + name;
  }
}