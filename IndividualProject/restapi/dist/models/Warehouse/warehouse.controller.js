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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseController = void 0;
const common_1 = require("@nestjs/common");
const create_warehouse_dto_1 = require("../../dto/create-warehouse.dto");
const update_warehouse_dto_1 = require("../../dto/update-warehouse.dto");
const warehouse_service_1 = require("./warehouse.service");
let WarehouseController = class WarehouseController {
    constructor(warehouseService) {
        this.warehouseService = warehouseService;
    }
    findAllWarehouses(clientID) {
        return this.warehouseService.find(clientID);
    }
    async createWarehouse(body, session) {
        const warehouse = await this.warehouseService.create(body.warehouseName, body.maxStockAmount);
        session.warehouseID = warehouse.warehouseID;
        return warehouse;
    }
    removeWarehouse(warehouseID) {
        return this.warehouseService.remove(parseInt(warehouseID));
    }
    updateWarehouse(warehouseID, body) {
        return this.warehouseService.update(parseInt(warehouseID), body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('clientID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WarehouseController.prototype, "findAllWarehouses", null);
__decorate([
    (0, common_1.Post)('/createWarehouse'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_warehouse_dto_1.CreateWarehouseDto, Object]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "createWarehouse", null);
__decorate([
    (0, common_1.Delete)('/:warehouseID'),
    __param(0, (0, common_1.Param)('warehouseID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WarehouseController.prototype, "removeWarehouse", null);
__decorate([
    (0, common_1.Patch)('/:warehouseID'),
    __param(0, (0, common_1.Param)('warehouseID')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_warehouse_dto_1.UpdateWarehouseDto]),
    __metadata("design:returntype", void 0)
], WarehouseController.prototype, "updateWarehouse", null);
WarehouseController = __decorate([
    (0, common_1.Controller)('warehouse'),
    __metadata("design:paramtypes", [warehouse_service_1.WarehouseService])
], WarehouseController);
exports.WarehouseController = WarehouseController;
//# sourceMappingURL=warehouse.controller.js.map