import {  Request,Response} from "express"
import pool from "../database/database";
class ProductsControllers {
   
    
    index(request:Request,response:Response){
        //response.send("hola clase de Programacion visual desde productsRoutes")
        //response.json({text: 'api desde productsController api/products'});
         pool.query('DESCRIBE products');
         response.json('products')
    }
    public createProducts (request:Request , response:Response){
    response.json({text:"Producto creado"});
    }
    public deleteProducts (request:Request , response:Response){
    response.json({text:"Producto eliminado"});
    }
}
export const productsControllers = new ProductsControllers();
export default productsControllers;