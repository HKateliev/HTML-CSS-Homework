import {
  Injectable,
  BadRequestException,
  NotFoundException
} from '@nestjs/common';
import { ClientService } from './client.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private clientService: ClientService) {}

  async signup(
    clientUsername: string,
    clientEmail: string,
    clientPassword: string
  ) {
    // See if username is in use
    const clients = await this.clientService.find(clientUsername);
    if (clients.length) {
      throw new BadRequestException('username in use');
    }

    // Hash the users password
    // Generate a salt
    const salt = randomBytes(8).toString('hex');

    // Hash the salt and the password together
    const hash = (await scrypt(clientPassword, salt, 32)) as Buffer;

    // Join the hashed result and the salt together
    const result = salt + '.' + hash.toString('hex');

    // Create a new user and save it
    const client = await this.clientService.create(
      clientUsername,
      clientEmail,
      result
    );

    // return the user
    return client;
  }

  async signin(clientUsername: string, clientPassword: string) {
    const [client] = await this.clientService.find(clientUsername);
    if (!client) {
      throw new NotFoundException('client not found');
    }

    const [salt, storedHash] = client.password.split('.');

    const hash = (await scrypt(clientPassword, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('bad password');
    }

    return client;
  }
}
