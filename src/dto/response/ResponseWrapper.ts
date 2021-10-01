export type ResponseWrapper<T> = {
    data : T,
    code : number,
    message : string
}