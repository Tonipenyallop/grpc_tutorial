import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServiceClient as _chatPackage_ChatServiceClient, ChatServiceDefinition as _chatPackage_ChatServiceDefinition } from './chatPackage/ChatService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chatPackage: {
    ChatInitiateRequest: MessageTypeDefinition
    ChatInitiateResponse: MessageTypeDefinition
    ChatService: SubtypeConstructor<typeof grpc.Client, _chatPackage_ChatServiceClient> & { service: _chatPackage_ChatServiceDefinition }
    ChatStreamResponse: MessageTypeDefinition
    SendMessageRequest: MessageTypeDefinition
    SendMessageResponse: MessageTypeDefinition
    Status: EnumTypeDefinition
    StreamRequest: MessageTypeDefinition
    User: MessageTypeDefinition
    UserStreamResponse: MessageTypeDefinition
  }
}

