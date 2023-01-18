// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _randomPackage_PingRequest, PingRequest__Output as _randomPackage_PingRequest__Output } from '../randomPackage/PingRequest';
import type { PingResponse as _randomPackage_PingResponse, PingResponse__Output as _randomPackage_PingResponse__Output } from '../randomPackage/PingResponse';
import type { RandomNumbersRequest as _randomPackage_RandomNumbersRequest, RandomNumbersRequest__Output as _randomPackage_RandomNumbersRequest__Output } from '../randomPackage/RandomNumbersRequest';
import type { RandomNumbersResponse as _randomPackage_RandomNumbersResponse, RandomNumbersResponse__Output as _randomPackage_RandomNumbersResponse__Output } from '../randomPackage/RandomNumbersResponse';

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
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_randomPackage_PingRequest__Output, _randomPackage_PingResponse>;
  
  RandomNumbers: grpc.handleServerStreamingCall<_randomPackage_RandomNumbersRequest__Output, _randomPackage_RandomNumbersResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_randomPackage_PingRequest, _randomPackage_PingResponse, _randomPackage_PingRequest__Output, _randomPackage_PingResponse__Output>
  RandomNumbers: MethodDefinition<_randomPackage_RandomNumbersRequest, _randomPackage_RandomNumbersResponse, _randomPackage_RandomNumbersRequest__Output, _randomPackage_RandomNumbersResponse__Output>
}
