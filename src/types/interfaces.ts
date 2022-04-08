import { Server } from "socket.io";

export interface IMessage {
  id: string;
  username: string;
  message: string;
  textColor?: string;
  nameColor?: string;
}

export interface ISocketServer {
  getServer(): Server;
}

export interface IRedisClient {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}