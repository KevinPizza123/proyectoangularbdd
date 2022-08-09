import {Router} from "express";
import productsControllers from "../controllers/productsControllers";

class ProductsRoutes{
    public router:Router = Router();
    constructor(){
        this.config();

    }
    config():void{// Configuracion de la rutas
    this.router.get('/',productsControllers.list);
    this.router.post('/',productsControllers.create);
    this.router.delete('/id',productsControllers.delete);
    
    }

}
const productsRoutes = new ProductsRoutes();
export default productsRoutes.router; 
