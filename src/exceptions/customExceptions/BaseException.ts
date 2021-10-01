export class BaseException extends Error {
    userFriendlyMessage : string;
    constructor(message : string,userFriendlyMessage : string){
        super(message);
        this.userFriendlyMessage = userFriendlyMessage;
    }


}