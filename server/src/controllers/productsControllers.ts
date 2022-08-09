import {  Request,Response} from "express"
import pool from "../database/database";
class ProductsControllers {
   
    
     public async list(request:Request,response:Response):Promise<void>{
        //response.send("hola clase de Programacion visual desde productsRoutes")
        //response.json({text: 'api desde productsController api/products'});
    const products =   await pool.query("SELECT * FROM  products");
        //pool.query('DESCRIBE products');
         response.json(products);
 }
 public async getOne(request:Request,response:Response):Promise<any>{
    const {id} = request.params
const products =   await pool.query("SELECT * FROM  products WHERE id = ?", [id]);
if(products.lenght > 0){
return  response.json(products[0]);
console.log(products);
} else {
response.json({text: 'el producto solicitado no existe'});
}
    //pool.query('DESCRIBE products');
    
}

    public async create (request:Request , response:Response):Promise<void>{
    await pool.query("INSERT INTO products set ?" , [request.body]);
    //console.log(request,body);
    response.json({message:"Producto se ha creado exitosamente"});
    }
    public delete (request:Request , response:Response){
    response.json({text:"Producto eliminado" + request.params.id});
    }
}
export const productsControllers = new ProductsControllers();
export default productsControllers;

function body(request: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, body: any) {
    throw new Error("Function not implemented.");
}
