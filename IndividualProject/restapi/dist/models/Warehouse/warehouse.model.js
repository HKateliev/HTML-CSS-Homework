"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const client_model_1 = require("../Client/client.model");
const product_model_1 = require("../Product/product.model");
const productWarehouse_model_1 = require("../ProductWarehouse/productWarehouse.model");
let Warehouse = class Warehouse extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], Warehouse.prototype, "warehouseID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Warehouse.prototype, "warehouseName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], Warehouse.prototype, "maxStockAmount", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => client_model_1.Client),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Warehouse.prototype, "clientID", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => client_model_1.Client),
    __metadata("design:type", client_model_1.Client)
], Warehouse.prototype, "client", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => product_model_1.Product, () => productWarehouse_model_1.ProductWarehouse),
    __metadata("design:type", Array)
], Warehouse.prototype, "products", void 0);
Warehouse = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false })
], Warehouse);
exports.Warehouse = Warehouse;
//# sourceMappingURL=warehouse.model.js.map