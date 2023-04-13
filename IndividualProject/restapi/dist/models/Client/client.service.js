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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const client_model_1 = require("./client.model");
let ClientService = class ClientService {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    async create(clientUsername, clientEmail, clientPassword) {
        const client = await client_model_1.Client.create({
            clientUsername,
            clientEmail,
            clientPassword
        });
        return client.toJSON();
    }
    async findOne(clientID) {
        const client = await client_model_1.Client.findByPk(clientID);
        if (!client) {
            throw new common_1.NotFoundException('client not found');
        }
        return client.toJSON();
    }
    async find(clientUsername) {
        const clients = await client_model_1.Client.findAll({ where: { clientUsername } });
        return clients.map((client) => client.toJSON());
    }
    async update(clientID, attrs) {
        const client = await client_model_1.Client.findByPk(clientID);
        if (!client) {
            throw new common_1.NotFoundException('client not found');
        }
        await client.update(attrs);
        return client.toJSON();
    }
    async remove(clientID) {
        const client = await client_model_1.Client.findByPk(clientID);
        if (!client) {
            throw new common_1.NotFoundException('client not found');
        }
        await client.destroy();
        return client.toJSON();
    }
};
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(client_model_1.Client)),
    __metadata("design:paramtypes", [Object])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map