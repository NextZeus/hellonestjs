import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log("%s %s",req.method, req.path); 
        next();
    }
}