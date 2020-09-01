import { Controller, Get } from '@nestjs/common';

@Controller('admin')
// The @Controller decorator can take a host option to require that the HTTP host of the incoming requests matches some specific value
// using sub-domain routing, the (default) Express adapter should be used. Fastify lacks support for nested routers
@Controller({ host: 'admin.example.com' })
export class AdminController {
    @Get()
    index(): string {
        return 'Admin page';
    }
}
