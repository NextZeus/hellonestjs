import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException, NotFoundException } from "@nestjs/common";
import { Response } from "express";
import {ResultCode} from '../../app.constants';
import { LogicException } from "../exceptions/logic.exception";


@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const msg = exception.message;
        let code = 1;

        if (exception instanceof BadRequestException) {
            code = ResultCode.INVALID_REQUEST_PARAMS;
        } 
        else if (exception instanceof NotFoundException) {
            code = ResultCode.NOT_IMPLEMENTED_ERROR;
        } 
        else if (exception instanceof LogicException) {
            code = exception.code;
        }

        response.status(200).json({
            code,
            msg,
            serverTime: Date.now(),
            data: exception && exception.message,
        });
    }
}