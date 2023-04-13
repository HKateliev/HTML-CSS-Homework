import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './client.model';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client)
    private clientModel: typeof Client
  ) {}
  async create(
    clientUsername: string,
    clientEmail: string,
    clientPassword: string
  ) {
    const client = await Client.create({
      clientUsername,
      clientEmail,
      clientPassword
    });
    return client.toJSON();
  }

  async findOne(clientID: number) {
    const client = await Client.findByPk(clientID);
    if (!client) {
      throw new NotFoundException('client not found');
    }
    return client.toJSON();
  }

  async find(clientUsername: string) {
    const clients = await Client.findAll({ where: { clientUsername } });
    return clients.map((client) => client.toJSON());
  }

  async update(clientID: number, attrs: Partial<Client>) {
    const client = await Client.findByPk(clientID);
    if (!client) {
      throw new NotFoundException('client not found');
    }
    await client.update(attrs);
    return client.toJSON();
  }

  async remove(clientID: number) {
    const client = await Client.findByPk(clientID);
    if (!client) {
      throw new NotFoundException('client not found');
    }
    await client.destroy();
    return client.toJSON();
  }
}
