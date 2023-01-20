import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/random';
import { ProtoGrpcType as ChatProtoGrpcType } from './proto/chatPackage';

import { RandomHandlers } from './proto/randomPackage/Random';
import { TodoListResponse } from './proto/randomPackage/TodoListResponse';
import { TodoListRequest } from './proto/randomPackage/TodoListRequest';
import { ChatRequest } from './proto/randomPackage/ChatRequest';
import { ChatResponse } from './proto/randomPackage/ChatResponse';
import { ChatServiceHandlers } from './proto/chatPackage/ChatService';
const PORT = 8082;
const RANDOM_PROTO_FILE = './proto/random.proto';
const CHAT_PROTO_FILE = './proto/chatPackage.proto';

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, RANDOM_PROTO_FILE),
);
const chatPackageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, CHAT_PROTO_FILE),
);

const grpcObj = grpc.loadPackageDefinition(
  packageDefinition,
) as unknown as ProtoGrpcType;
const chatGrpcObj = grpc.loadPackageDefinition(
  chatPackageDefinition,
) as unknown as ChatProtoGrpcType;

const randomPackage = grpcObj.randomPackage;
const chatPackage = chatGrpcObj.chatPackage;

function main() {
  const server = getServer();
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Listening PORT ${port}`);
      server.start();
    },
  );
}

const todoList: TodoListResponse = { todoLists: [] };

const callObjByUserName = new Map<
  string,
  grpc.ServerDuplexStream<ChatRequest, ChatResponse>
>();
function getServer() {
  const server = new grpc.Server();
  server.addService(randomPackage.Random.service, {
    PingPong: (req, res) => {
      console.log(req.request);
      res(null, { message: 'TAT NOICE :) ' });
    },
    RandomNumbers: call => {
      const { maxVal = 10 } = call.request;
      let count = 0;
      setInterval(() => {
        call.write({ num: Math.floor(Math.random() * maxVal) });
        count++;
        if (count >= 15) {
          clearInterval(count);
          call.end();
        }
      }, 500);
    },
    TodoList: (call, res) => {
      call.on('data', (chunk: TodoListRequest) => {
        todoList.todoLists?.push(chunk);
      });

      call.on('end', () => {
        res(null, { todoLists: todoList.todoLists });
      });
    },
    Chat: call => {
      console.log('call.metadata');
      console.log(call.metadata);
      // const userName = call.metadata.get("userName")[0] as string;
      call.on('data', req => {
        const userName = call.metadata.get('userName')[0] as string;
        console.log('userName');
        console.log(userName);
        console.log(req);
        const { message } = req;

        for (const [user, userCall] of callObjByUserName) {
          if (userName !== user) {
            userCall.write({
              userName,
              message,
            });
          }
        }
        if (callObjByUserName.get(userName) === undefined) {
          callObjByUserName.set(userName, call);
        }
      });
      call.on('end', () => {
        const userName = call.metadata.get('userName')[0] as string;
        callObjByUserName.delete(userName);
        console.log(`${userName} is ending chat session `);
        call.write({
          userName: 'Server',
          message: 'SEE YOU LATER',
        });
        call.end();
      });
    },
  } as RandomHandlers);

  server.addService(chatPackage.ChatService.service, {} as ChatServiceHandlers);

  return server;
}

main();
