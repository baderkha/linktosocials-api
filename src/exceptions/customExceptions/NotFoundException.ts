import { BaseException } from "./BaseException";

export class NotFoundException extends BaseException {
    constructor(message : string , userFriendlyMessage : string) {
        super(message,userFriendlyMessage);
    }
}