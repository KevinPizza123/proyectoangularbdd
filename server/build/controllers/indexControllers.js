"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
class IndexControllers {
    index(request, response) {
        response.send("hola clase de Programacion visual desde indexRoutes");
    }
}
exports.indexControllers = new IndexControllers();
exports.default = exports.indexControllers;
