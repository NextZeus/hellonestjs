import { Injectable } from '@nestjs/common';
import { RedisLock, RedisLockService } from 'nestjs-simple-redis-lock';

@Injectable()
export class ConfigService {
    constructor(
        protected readonly lockService: RedisLockService,
    ){}

    @RedisLock("xxxxxx", 10000, 100, 5)
    async getName(name): Promise<string> {
        // try {
        //     /**
        //      * Get a lock by name
        //      * Automatically unlock after 1min
        //      * Try again after 100ms
        //      * The max times to retry is 36000, about 1h
        //      */
        //     await this.lockService.lock('test1',10000);
        //     // Do somethings
        //     return name

        // } catch(error){
        //     console.error("err", error);
        //     this.lockService.unlock('test1'); // unlock
        //     return "catch"
        // }
        return ""+Date.now()
    }

    /**
   * Wrap the method, starting with getting a lock, ending with unlocking
   * The first parameter is lock name
   * By default, automatically unlock after 1min.
   * By default, try again after 100ms if failed
   * By default, the max times to retry is 36000, about 1h
   */
    @RedisLock('test2', 10000, 10000, 1)
    async test1() {
        // Do somethings
        return 'some values';
    }

    /**
     * Automatically unlock after 2min
     * Try again after 50ms if failed
     * The max times to retry is 100
     */
    // @RedisLock('test2', 2 * 60 * 1000, 50, 100)
    @RedisLock('test2', 10000, 10000, 1)
    async test2() {
        // Do somethings
        return 'some values';
    }
}
