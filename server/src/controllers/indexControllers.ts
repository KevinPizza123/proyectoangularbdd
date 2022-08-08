import {  Request,Response} from "express"
class IndexControllers {
    index(request:Request,response:Response){
        response.send({text : "hola clase de Programacion visual desde indexRoutes"})

    }
}
export const indexControllers = new IndexControllers();
export default indexControllers