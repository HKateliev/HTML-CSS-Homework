import { CreateClientDto } from 'src/dto/create-client.dto';
import { AuthService } from './auth.service';
import { ClientService } from './client.service';
export declare class ClientController {
    private clientService;
    private authService;
    constructor(clientService: ClientService, authService: AuthService);
    createUser(body: CreateClientDto, session: any): Promise<any>;
    signOut(session: any): void;
    signin(body: CreateClientDto, session: any): Promise<any>;
    findUser(clientID: string): Promise<any>;
    findAllUsers(clientUsername: string): Promise<any[]>;
    removeUser(clientID: string): Promise<any>;
}
