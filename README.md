# Chat API v1

This is a simple API for chats using websocket protocol. The client side for
this is also available in my repositories.

I developed this project using Nodejs with Typescript and Socket.io.

# Initializing

## Pre requisites

| System      | Required |
| ----------- | ----------- |
| Node.js      | :heavy_check_mark: |
| Yarn   | :heavy_check_mark: |
| Redis database   | :heavy_check_mark: |

This project has some dependencies that work along with it. To install all
required packages just run `yarn install` in the console.

```shell 
yarn install
```

# Environment variables

With all your environment set up, some environments variables are necessary to 
run this application. Inside the `.env.example` there are **four** variables for
you to give an value, they are:

| Variable      | Description | Required |
| ----------- | ----------- | ----------- |
| REDIS_HOST | It defines Redis database host | :heavy_check_mark: |
| REDIS_PORT | It defines Redis database port | :heavy_check_mark: |
| REDIS_PASSWORD | It defines Redis database password to access it. Since Redis does not require a password inside localhosts environments, this variable is not required | :x: |
| SOCKET_CORS_CLIENT_HOST | It defines the client origin URL to the websocket server | :heavy_check_mark:

## Running the app

After all steps above, all you need to do is to run a single command in console!

```shell
yarn dev
```

This command runs the development server.

# Conclusions

This project is just for educational reasons (study and fun) so it does not have
a method to build all the code up, neither a complicated design pattern.

I hope you enjoyed, and thanks for visiting!
