import 'dotenv/config';

import express from 'express';
import http from 'http';
import { v4 } from 'uuid';

import SocketServer from './providers/SocketServer';
import RedisClient from './providers/RedisClient';
import { IMessage } from './types/interfaces';

const app = express();
const httpServer = http.createServer(app);

const socketServer = new SocketServer(httpServer).getServer();
const redisClient = new RedisClient();

let storagedMessages: string | null = null;

//redisClient.removeItem('chatMessages');

redisClient.getItem('chatMessages').then(result => {
  storagedMessages = result;

  const messages: IMessage[] = storagedMessages ? JSON.parse(storagedMessages) : [];

  socketServer.on('connection', socket => {
    socket.emit('getMessages', messages);

    socket.on('sendMessage', async data => {
      const messageId = v4();

      messages.push({ ...data, id: messageId });

      await redisClient.setItem('chatMessages', JSON.stringify(messages));

      socketServer.emit('getMessages', messages);
    });
  });

  httpServer.listen(3333, () => console.log('Chat API initialized!'));
});


