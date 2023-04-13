"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const client_model_1 = require("../Client/client.model");
const warehouse_controller_1 = require("./warehouse.controller");
const warehouse_model_1 = require("./warehouse.model");
const warehouse_service_1 = require("./warehouse.service");
const productWarehouse_model_1 = require("../ProductWarehouse/productWarehouse.model");
let WarehouseModule = class WarehouseModule {
};
WarehouseModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([client_model_1.Client, warehouse_model_1.Warehouse, productWarehouse_model_1.ProductWarehouse])],
        providers: [warehouse_service_1.WarehouseService],
        controllers: [warehouse_controller_1.WarehouseController]
    })
], WarehouseModule);
exports.WarehouseModule = WarehouseModule;
//# sourceMappingURL=warehouse.module.js.map