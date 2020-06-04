import { ResultCode } from '../../app.constants';

/**
 * 自定义逻辑异常
 * useage: throw new LogicException(errcode, errmsg)
 */
export class LogicException extends Error {
    public readonly code : ResultCode;

    constructor(errcode: ResultCode, errmsg: string) {
        super();
        this.name = 'LogicException';
        this.code = errcode;
        this.message = errmsg;
    }
}