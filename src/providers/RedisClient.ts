import Redis, { Redis as RedisInterface } from 'ioredis';

import redisConfig from '../config/redisConfig';
import { IRedisClient } from '../types/interfaces';

export default class RedisClient implements IRedisClient {
  private redisClient: RedisInterface;

  constructor() {
    this.redisClient = new Redis(redisConfig);
  }

  public async setItem(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value);
  }

  public async removeItem(key: string): Promise<void> {
    await this.redisClient.del(key);
  }

  public async getItem(key: string): Promise<string | null> {
    return this.redisClient.get(key);
  }
}