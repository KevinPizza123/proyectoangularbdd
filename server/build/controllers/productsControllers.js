"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsControllers = void 0;
const database_1 = __importDefault(require("../database/database"));
class ProductsControllers {
    async list(request, response) {
        //response.send("hola clase de Programacion visual desde productsRoutes")
        //response.json({text: 'api desde productsController api/products'});
        const products = await database_1.default.query('SELECT * FROM  products');
        //pool.query('DESCRIBE products');
        response.json(products);
    }
    async create(request, response) {
        await database_1.default.query("INSERT INTO products set ?", [request.body]);
        //console.log(request,body);
        response.json({ message: "Producto se ha creado exitosamente" });
    }
    delete(request, response) {
        response.json({ text: "Producto eliminado" + request.params.id });
    }
}
exports.productsControllers = new ProductsControllers();
exports.default = exports.productsControllers;
function body(request, body) {
    throw new Error("Function not implemented.");
}
