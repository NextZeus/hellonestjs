import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';

// global module , other module will not need to import this module in theirs imports array
@Global()
@Module({
    exports: [ConfigService],
    providers: [ConfigService]
})
export class ConfigModule { }
