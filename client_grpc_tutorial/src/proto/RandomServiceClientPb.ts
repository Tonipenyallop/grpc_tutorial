/**
 * @fileoverview gRPC-Web generated client stub for randomPackage
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: proto/random.proto

/* eslint-disable */
// @ts-nocheck

import * as grpcWeb from 'grpc-web';

import * as proto_random_pb from '../proto/random_pb';

export class RandomClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string };
  options_: null | { [index: string]: any };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any },
  ) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorPingPong = new grpcWeb.MethodDescriptor(
    '/randomPackage.Random/PingPong',
    grpcWeb.MethodType.UNARY,
    proto_random_pb.PingRequest,
    proto_random_pb.PingResponse,
    (request: proto_random_pb.PingRequest) => {
      return request.serializeBinary();
    },
    proto_random_pb.PingResponse.deserializeBinary,
  );

  pingPong(
    request: proto_random_pb.PingRequest,
    metadata: grpcWeb.Metadata | null,
  ): Promise<proto_random_pb.PingResponse>;

  pingPong(
    request: proto_random_pb.PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.RpcError,
      response: proto_random_pb.PingResponse,
    ) => void,
  ): grpcWeb.ClientReadableStream<proto_random_pb.PingResponse>;

  pingPong(
    request: proto_random_pb.PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.RpcError,
      response: proto_random_pb.PingResponse,
    ) => void,
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + '/randomPackage.Random/PingPong',
        request,
        metadata || {},
        this.methodDescriptorPingPong,
        callback,
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + '/randomPackage.Random/PingPong',
      request,
      metadata || {},
      this.methodDescriptorPingPong,
    );
  }

  methodDescriptorRandomNumbers = new grpcWeb.MethodDescriptor(
    '/randomPackage.Random/RandomNumbers',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_random_pb.RandomNumbersRequest,
    proto_random_pb.RandomNumbersResponse,
    (request: proto_random_pb.RandomNumbersRequest) => {
      return request.serializeBinary();
    },
    proto_random_pb.RandomNumbersResponse.deserializeBinary,
  );

  randomNumbers(
    request: proto_random_pb.RandomNumbersRequest,
    metadata?: grpcWeb.Metadata,
  ): grpcWeb.ClientReadableStream<proto_random_pb.RandomNumbersResponse> {
    return this.client_.serverStreaming(
      this.hostname_ + '/randomPackage.Random/RandomNumbers',
      request,
      metadata || {},
      this.methodDescriptorRandomNumbers,
    );
  }
}
