interface ISocketConfig {
  cors: {
    origin?: string;
  }
}

export default {
  cors: {
    origin: process.env.SOCKET_CORS_CLIENT_HOST,
  }
} as ISocketConfig;
