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
exports.Client = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_2 = require("sequelize-typescript");
const warehouse_model_1 = require("../Warehouse/warehouse.model");
let Client = class Client extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_2.PrimaryKey,
    (0, sequelize_typescript_2.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], Client.prototype, "clientID", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Client.prototype, "clientUsername", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Client.prototype, "clientEmail", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], Client.prototype, "clientPassword", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => warehouse_model_1.Warehouse),
    __metadata("design:type", Array)
], Client.prototype, "warehouses", void 0);
Client = __decorate([
    (0, sequelize_typescript_2.Table)({ timestamps: false })
], Client);
exports.Client = Client;
//# sourceMappingURL=client.model.js.map