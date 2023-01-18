// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _randomPackage_PingRequest, PingRequest__Output as _randomPackage_PingRequest__Output } from '../randomPackage/PingRequest';
import type { PingResponse as _randomPackage_PingResponse, PingResponse__Output as _randomPackage_PingResponse__Output } from '../randomPackage/PingResponse';
import type { RandomNumbersRequest as _randomPackage_RandomNumbersRequest, RandomNumbersRequest__Output as _randomPackage_RandomNumbersRequest__Output } from '../randomPackage/RandomNumbersRequest';
import type { RandomNumbersResponse as _randomPackage_RandomNumbersResponse, RandomNumbersResponse__Output as _randomPackage_RandomNumbersResponse__Output } from '../randomPackage/RandomNumbersResponse';
import type { TodoListRequest as _randomPackage_TodoListRequest, TodoListRequest__Output as _randomPackage_TodoListRequest__Output } from '../randomPackage/TodoListRequest';
import type { TodoListResponse as _randomPackage_TodoListResponse, TodoListResponse__Output as _randomPackage_TodoListResponse__Output } from '../randomPackage/TodoListResponse';

export interface RandomClient extends grpc.Client {
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, callback: grpc.requestCallback<_randomPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  
  RandomNumbers(argument: _randomPackage_RandomNumbersRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_RandomNumbersResponse__Output>;
  RandomNumbers(argument: _randomPackage_RandomNumbersRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_RandomNumbersResponse__Output>;
  randomNumbers(argument: _randomPackage_RandomNumbersRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_RandomNumbersResponse__Output>;
  randomNumbers(argument: _randomPackage_RandomNumbersRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_RandomNumbersResponse__Output>;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoListResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoListRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_TodoListResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoListRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoListResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoListRequest>;
  TodoList(callback: grpc.requestCallback<_randomPackage_TodoListResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoListRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoListResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoListRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_TodoListResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoListRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_TodoListResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoListRequest>;
  todoList(callback: grpc.requestCallback<_randomPackage_TodoListResponse__Output>): grpc.ClientWritableStream<_randomPackage_TodoListRequest>;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_randomPackage_PingRequest__Output, _randomPackage_PingResponse>;
  
  RandomNumbers: grpc.handleServerStreamingCall<_randomPackage_RandomNumbersRequest__Output, _randomPackage_RandomNumbersResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_randomPackage_TodoListRequest__Output, _randomPackage_TodoListResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_randomPackage_PingRequest, _randomPackage_PingResponse, _randomPackage_PingRequest__Output, _randomPackage_PingResponse__Output>
  RandomNumbers: MethodDefinition<_randomPackage_RandomNumbersRequest, _randomPackage_RandomNumbersResponse, _randomPackage_RandomNumbersRequest__Output, _randomPackage_RandomNumbersResponse__Output>
  TodoList: MethodDefinition<_randomPackage_TodoListRequest, _randomPackage_TodoListResponse, _randomPackage_TodoListRequest__Output, _randomPackage_TodoListResponse__Output>
}
