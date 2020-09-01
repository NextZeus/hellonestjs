import { Controller, Get, HostParam } from '@nestjs/common';

@Controller('account')
@Controller({ host: ':account.example.com' })
export class AccountController {
    @Get()
    getInfo(@HostParam('account') account: string) {
        return account;
    }
}
