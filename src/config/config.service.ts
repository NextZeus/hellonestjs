import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    public redisPrefix: string = "hellonestjs"

    get RedisPrefix(): string {
        return this.redisPrefix;
    }
}
