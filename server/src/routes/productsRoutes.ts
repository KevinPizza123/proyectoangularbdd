import {Router} from "express";
import productsControllers from "../controllers/productsControllers";

class ProductsRoutes{
    public router:Router = Router();
    constructor(){
        this.config();

    }
    config():void{// Configuracion de la rutas
    this.router.get('/',productsControllers.index);
    this.router.post('/',productsControllers.createProducts);
    this.router.delete('/',productsControllers.deleteProducts);
    
    }

}
const productsRoutes = new ProductsRoutes();
export default productsRoutes.router; 
