import { NestInterceptor, Injectable, ExecutionContext, CallHandler } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators'

export interface Response<T> {
    code: number;
    msg: string;
    serverTime: number;
    data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    private readonly logger = console;
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
        const beginTime = Date.now();
        const request = context.switchToHttp().getResponse<Request>();

        return next.handle().pipe(
            map(data => ({
                code: 0,
                msg: '',
                serverTime: Date.now(),
                data,
            })),
            tap(respObj =>
                this.logger.debug({
                    url: request.url,
                    responseTime: Date.now() - beginTime
                }, 'req end')
            ),
        );
    }
}