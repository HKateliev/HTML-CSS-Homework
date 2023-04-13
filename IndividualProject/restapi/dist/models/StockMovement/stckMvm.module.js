"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockMovementModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_model_1 = require("../Product/product.model");
const warehouse_model_1 = require("../Warehouse/warehouse.model");
const stckMvm_controller_1 = require("./stckMvm.controller");
const stckMvm_model_1 = require("./stckMvm.model");
const stckMvm_service_1 = require("./stckMvm.service");
let StockMovementModule = class StockMovementModule {
};
StockMovementModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([stckMvm_model_1.StockMovement, warehouse_model_1.Warehouse, product_model_1.Product])],
        providers: [stckMvm_service_1.StockMovementService],
        controllers: [stckMvm_controller_1.StockMovementController]
    })
], StockMovementModule);
exports.StockMovementModule = StockMovementModule;
//# sourceMappingURL=stckMvm.module.js.map