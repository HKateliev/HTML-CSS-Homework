"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const client_model_1 = require("./models/Client/client.model");
const client_module_1 = require("./models/Client/client.module");
const product_model_1 = require("./models/Product/product.model");
const product_module_1 = require("./models/Product/product.module");
const stckMvm_model_1 = require("./models/StockMovement/stckMvm.model");
const stckMvm_module_1 = require("./models/StockMovement/stckMvm.module");
const warehouse_model_1 = require("./models/Warehouse/warehouse.model");
const warehouse_module_1 = require("./models/Warehouse/warehouse.module");
const productWarehouse_model_1 = require("./models/ProductWarehouse/productWarehouse.model");
const productWarehouse_module_1 = require("./models/ProductWarehouse/productWarehouse.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'hkateliev99',
                database: 'warehouse',
                models: [client_model_1.Client, warehouse_model_1.Warehouse, product_model_1.Product, stckMvm_model_1.StockMovement, productWarehouse_model_1.ProductWarehouse],
                synchronize: true,
                autoLoadModels: true
            }),
            client_module_1.ClientModule,
            warehouse_module_1.WarehouseModule,
            product_module_1.ProductModule,
            stckMvm_module_1.StockMovementModule,
            productWarehouse_module_1.ProductWarehouseModule
        ],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map