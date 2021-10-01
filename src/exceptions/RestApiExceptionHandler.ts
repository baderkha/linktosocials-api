import {ResponseWrapper} from '../dto/response/ResponseWrapper';
import { BaseException } from './customExceptions/BaseException';
import StatusCodes from 'http-status-codes';
import { NotFoundException } from './customExceptions/NotFoundException';
import { BadRequestException } from './customExceptions/BadRequestException';

export class RestApiExceptionHandler {


    handleException (err : BaseException | Error ) : ResponseWrapper<any> {
        try {
            let methodName = `handle${err.constructor.name}`;
            return this[methodName as keyof RestApiExceptionHandler].bind(this,err)();
        } catch(_) {
            return {
                code : StatusCodes.INTERNAL_SERVER_ERROR,
                data : null,
                message :`UNCAUGHT EXCEPTION PLEASE CONTACT ADMIN: ${err.message}`
            }
        }
    }
    
    handleNotFoundException (err : NotFoundException ) : ResponseWrapper<any> {
        return {
            code : StatusCodes.NOT_FOUND,
            data : null,
            message : `NOT FOUND : ${err.userFriendlyMessage}`
        }
    }

    handleBadRequestException (err : BadRequestException) : ResponseWrapper<any> {
        return {
            code : StatusCodes.BAD_REQUEST,
            data : null,
            message : `BAD REQUEST : ${err.userFriendlyMessage}`
        }
    }

}