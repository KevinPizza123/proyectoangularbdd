import {Router} from "express";
import indexController, { indexControllers } from "../controllers/indexControllers";

class IndexRoutes{
    public router:Router = Router();
    constructor(){
        this.config();

    }
    config():void{// Configuracion de la rutas
       
        this.router.get('/',indexControllers.index);

    }

}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router; 
