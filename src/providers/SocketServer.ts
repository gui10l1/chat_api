import { Server as SocketServer } from 'socket.io';
import { Server as HttpServer } from 'http';

import socketConfig from '../config/socketConfig';
import { ISocketServer } from '../types/interfaces';

export default class SocketClient implements ISocketServer {
  private server: SocketServer;

  constructor(server: HttpServer) {
    this.server = new SocketServer(server, socketConfig);
  }

  public getServer(): SocketServer {
    return this.server;
  }
}