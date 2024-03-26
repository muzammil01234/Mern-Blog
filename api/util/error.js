const errorHandler=(statuscode,message)=>{
    let error= new Error();
    error.statuscode=statuscode
    error.message=message
    return error;
}
export default errorHandler;