interface IRedisConfig {
  host: string;
  port: number;
  password?: string;
}

export default {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD || undefined,
} as IRedisConfig;