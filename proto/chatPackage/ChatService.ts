// Original file: proto/chatPackage.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatInitiateRequest as _chatPackage_ChatInitiateRequest, ChatInitiateRequest__Output as _chatPackage_ChatInitiateRequest__Output } from '../chatPackage/ChatInitiateRequest';
import type { ChatInitiateResponse as _chatPackage_ChatInitiateResponse, ChatInitiateResponse__Output as _chatPackage_ChatInitiateResponse__Output } from '../chatPackage/ChatInitiateResponse';
import type { ChatStreamResponse as _chatPackage_ChatStreamResponse, ChatStreamResponse__Output as _chatPackage_ChatStreamResponse__Output } from '../chatPackage/ChatStreamResponse';
import type { SendMessageRequest as _chatPackage_SendMessageRequest, SendMessageRequest__Output as _chatPackage_SendMessageRequest__Output } from '../chatPackage/SendMessageRequest';
import type { SendMessageResponse as _chatPackage_SendMessageResponse, SendMessageResponse__Output as _chatPackage_SendMessageResponse__Output } from '../chatPackage/SendMessageResponse';
import type { StreamRequest as _chatPackage_StreamRequest, StreamRequest__Output as _chatPackage_StreamRequest__Output } from '../chatPackage/StreamRequest';
import type { UserStreamResponse as _chatPackage_UserStreamResponse, UserStreamResponse__Output as _chatPackage_UserStreamResponse__Output } from '../chatPackage/UserStreamResponse';

export interface ChatServiceClient extends grpc.Client {
  ChatInitiate(argument: _chatPackage_ChatInitiateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_ChatInitiateResponse__Output>): grpc.ClientUnaryCall;
  ChatInitiate(argument: _chatPackage_ChatInitiateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_ChatInitiateResponse__Output>): grpc.ClientUnaryCall;
  ChatInitiate(argument: _chatPackage_ChatInitiateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_ChatInitiateResponse__Output>): grpc.ClientUnaryCall;
  ChatInitiate(argument: _chatPackage_ChatInitiateRequest, callback: grpc.requestCallback<_chatPackage_ChatInitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_ChatInitiateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_ChatInitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_ChatInitiateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_ChatInitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_ChatInitiateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_ChatInitiateResponse__Output>): grpc.ClientUnaryCall;
  chatInitiate(argument: _chatPackage_ChatInitiateRequest, callback: grpc.requestCallback<_chatPackage_ChatInitiateResponse__Output>): grpc.ClientUnaryCall;
  
  ChatStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_ChatStreamResponse__Output>;
  ChatStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_ChatStreamResponse__Output>;
  chatStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_ChatStreamResponse__Output>;
  chatStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_ChatStreamResponse__Output>;
  
  SendMessage(argument: _chatPackage_SendMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_SendMessageResponse__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chatPackage_SendMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_SendMessageResponse__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chatPackage_SendMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_SendMessageResponse__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chatPackage_SendMessageRequest, callback: grpc.requestCallback<_chatPackage_SendMessageResponse__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_SendMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_SendMessageResponse__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_SendMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_SendMessageResponse__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_SendMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_SendMessageResponse__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatPackage_SendMessageRequest, callback: grpc.requestCallback<_chatPackage_SendMessageResponse__Output>): grpc.ClientUnaryCall;
  
  UserStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  UserStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  userStream(argument: _chatPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  userStream(argument: _chatPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatPackage_UserStreamResponse__Output>;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  ChatInitiate: grpc.handleUnaryCall<_chatPackage_ChatInitiateRequest__Output, _chatPackage_ChatInitiateResponse>;
  
  ChatStream: grpc.handleServerStreamingCall<_chatPackage_StreamRequest__Output, _chatPackage_ChatStreamResponse>;
  
  SendMessage: grpc.handleUnaryCall<_chatPackage_SendMessageRequest__Output, _chatPackage_SendMessageResponse>;
  
  UserStream: grpc.handleServerStreamingCall<_chatPackage_StreamRequest__Output, _chatPackage_UserStreamResponse>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  ChatInitiate: MethodDefinition<_chatPackage_ChatInitiateRequest, _chatPackage_ChatInitiateResponse, _chatPackage_ChatInitiateRequest__Output, _chatPackage_ChatInitiateResponse__Output>
  ChatStream: MethodDefinition<_chatPackage_StreamRequest, _chatPackage_ChatStreamResponse, _chatPackage_StreamRequest__Output, _chatPackage_ChatStreamResponse__Output>
  SendMessage: MethodDefinition<_chatPackage_SendMessageRequest, _chatPackage_SendMessageResponse, _chatPackage_SendMessageRequest__Output, _chatPackage_SendMessageResponse__Output>
  UserStream: MethodDefinition<_chatPackage_StreamRequest, _chatPackage_UserStreamResponse, _chatPackage_StreamRequest__Output, _chatPackage_UserStreamResponse__Output>
}
