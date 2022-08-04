"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsControllers = void 0;
const database_1 = __importDefault(require("../database/database"));
class ProductsControllers {
    index(request, response) {
        //response.send("hola clase de Programacion visual desde productsRoutes")
        //response.json({text: 'api desde productsController api/products'});
        database_1.default.query('DESCRIBE products');
        response.json('products');
    }
}
exports.productsControllers = new ProductsControllers();
exports.default = exports.productsControllers;
