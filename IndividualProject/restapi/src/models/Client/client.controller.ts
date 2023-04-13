import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  NotFoundException,
  Session,
} from '@nestjs/common';
import { CreateClientDto } from 'src/dto/create-client.dto';
import { AuthService } from './auth.service';
import { ClientService } from './client.service';
@Controller('client')
export class ClientController {
  
  constructor(
    private clientService: ClientService,
    private authService: AuthService,
  ) {}
    
  @Post('/signup')
  async createUser(@Body() body: CreateClientDto, @Session() session: any) {
    const client = await this.authService.signup(body.clientUsername, body.clientEmail,body.clientPassword);
    session.clientID = client.id;
    return client;
  }


  @Post('/signout')
  signOut(@Session() session: any) {
    session.clientID = null;
  }

  @Post('/signin')
  async signin(@Body() body: CreateClientDto, @Session() session: any) {
    console.log(body);
    const client = await this.authService.signin(body.clientUsername, body.clientPassword);
    session.clientID = client.id;
    return client;
  }

  @Get('/:id')
  async findUser(@Param('clientID') clientID: string) {
    const client = await this.clientService.findOne(parseInt(clientID));
    if (!client) {
      throw new NotFoundException('client not found');
    }
    return client;
  }

  @Get()
  findAllUsers(@Query('clientUsername') clientUsername: string) {
    return this.clientService.find(clientUsername);
  }

  @Delete('/:clientID')
  removeUser(@Param('clientID') clientID: string) {
    return this.clientService.remove(parseInt(clientID));
  }
}
