import { RestApiExceptionHandler } from "../exceptions/RestApiExceptionHandler";
import { LinkProfileController } from "./LinkProfileController";
import { ProfileController } from "./ProfileController";

/**
 * Export Type Rest api controller
 */
export type RestControllers  = {
    linkProfile : LinkProfileController,
    profileController : ProfileController
}

/**
 * generic exception handler wrapper for all the rest api methods
 * @param controller 
 * @returns 
 */
function wrap<T> (controller : T) : T {
    const exceptionHandler = new RestApiExceptionHandler();
    for (const name of Object.getOwnPropertyNames(controller)) {
        let method = controller[name as keyof Object];
        if (typeof method === "function" && name.indexOf("rest") === 0  ) {
            method = async (req : Express.Request,res : Express.Response)=>{
                try {
                    await method.apply(this,[req,res]);
                } catch(e) {
                    exceptionHandler.handleException(e)
                }
            }
        }
    }
    return controller
}


export const makeControllers = (config : any) : RestControllers => {
    return {
        linkProfile : wrap<LinkProfileController>(new LinkProfileController()),
        profileController : wrap<ProfileController> (new ProfileController()),
    }
}