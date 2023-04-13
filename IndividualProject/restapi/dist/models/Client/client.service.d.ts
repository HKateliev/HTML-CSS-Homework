import { Client } from './client.model';
export declare class ClientService {
    private clientModel;
    constructor(clientModel: typeof Client);
    create(clientUsername: string, clientEmail: string, clientPassword: string): Promise<any>;
    findOne(clientID: number): Promise<any>;
    find(clientUsername: string): Promise<any[]>;
    update(clientID: number, attrs: Partial<Client>): Promise<any>;
    remove(clientID: number): Promise<any>;
}
