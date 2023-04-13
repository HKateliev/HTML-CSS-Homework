import { ClientService } from './client.service';
export declare class AuthService {
    private clientService;
    constructor(clientService: ClientService);
    signup(clientUsername: string, clientEmail: string, clientPassword: string): Promise<any>;
    signin(clientUsername: string, clientPassword: string): Promise<any>;
}
