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
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const create_client_dto_1 = require("../../dto/create-client.dto");
const auth_service_1 = require("./auth.service");
const client_service_1 = require("./client.service");
let ClientController = class ClientController {
    constructor(clientService, authService) {
        this.clientService = clientService;
        this.authService = authService;
    }
    async createUser(body, session) {
        const client = await this.authService.signup(body.clientUsername, body.clientEmail, body.clientPassword);
        session.clientID = client.id;
        return client;
    }
    signOut(session) {
        session.clientID = null;
    }
    async signin(body, session) {
        console.log(body);
        const client = await this.authService.signin(body.clientUsername, body.clientPassword);
        session.clientID = client.id;
        return client;
    }
    async findUser(clientID) {
        const client = await this.clientService.findOne(parseInt(clientID));
        if (!client) {
            throw new common_1.NotFoundException('client not found');
        }
        return client;
    }
    findAllUsers(clientUsername) {
        return this.clientService.find(clientUsername);
    }
    removeUser(clientID) {
        return this.clientService.remove(parseInt(clientID));
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto, Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientController.prototype, "signOut", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto, Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "signin", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('clientID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "findUser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('clientUsername')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Delete)('/:clientID'),
    __param(0, (0, common_1.Param)('clientID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientController.prototype, "removeUser", null);
ClientController = __decorate([
    (0, common_1.Controller)('client'),
    __metadata("design:paramtypes", [client_service_1.ClientService,
        auth_service_1.AuthService])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map