import * as jspb from 'google-protobuf';

export class ChatInitiateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): ChatInitiateRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): ChatInitiateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatInitiateRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ChatInitiateRequest,
  ): ChatInitiateRequest.AsObject;
  static serializeBinaryToWriter(
    message: ChatInitiateRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChatInitiateRequest;
  static deserializeBinaryFromReader(
    message: ChatInitiateRequest,
    reader: jspb.BinaryReader,
  ): ChatInitiateRequest;
}

export namespace ChatInitiateRequest {
  export type AsObject = {
    username: string;
    avatarUrl: string;
  };
}

export class ChatInitiateResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ChatInitiateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatInitiateResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ChatInitiateResponse,
  ): ChatInitiateResponse.AsObject;
  static serializeBinaryToWriter(
    message: ChatInitiateResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChatInitiateResponse;
  static deserializeBinaryFromReader(
    message: ChatInitiateResponse,
    reader: jspb.BinaryReader,
  ): ChatInitiateResponse;
}

export namespace ChatInitiateResponse {
  export type AsObject = {
    id: number;
  };
}

export class SendMessageRequest extends jspb.Message {
  getId(): number;
  setId(value: number): SendMessageRequest;

  getMessage(): string;
  setMessage(value: string): SendMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendMessageRequest,
  ): SendMessageRequest.AsObject;
  static serializeBinaryToWriter(
    message: SendMessageRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(
    message: SendMessageRequest,
    reader: jspb.BinaryReader,
  ): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    id: number;
    message: string;
  };
}

export class SendMessageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendMessageResponse,
  ): SendMessageResponse.AsObject;
  static serializeBinaryToWriter(
    message: SendMessageResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
  static deserializeBinaryFromReader(
    message: SendMessageResponse,
    reader: jspb.BinaryReader,
  ): SendMessageResponse;
}

export namespace SendMessageResponse {
  export type AsObject = {};
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): User;

  getUsername(): string;
  setUsername(value: string): User;

  getStatus(): Status;
  setStatus(value: Status): User;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(
    message: User,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(
    message: User,
    reader: jspb.BinaryReader,
  ): User;
}

export namespace User {
  export type AsObject = {
    id: number;
    username: string;
    status: Status;
    avatarUrl: string;
  };
}

export class UserStreamResponse extends jspb.Message {
  getUserList(): Array<User>;
  setUserList(value: Array<User>): UserStreamResponse;
  clearUserList(): UserStreamResponse;
  addUser(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserStreamResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UserStreamResponse,
  ): UserStreamResponse.AsObject;
  static serializeBinaryToWriter(
    message: UserStreamResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): UserStreamResponse;
  static deserializeBinaryFromReader(
    message: UserStreamResponse,
    reader: jspb.BinaryReader,
  ): UserStreamResponse;
}

export namespace UserStreamResponse {
  export type AsObject = {
    userList: Array<User.AsObject>;
  };
}

export class StreamRequest extends jspb.Message {
  getId(): number;
  setId(value: number): StreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StreamRequest,
  ): StreamRequest.AsObject;
  static serializeBinaryToWriter(
    message: StreamRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(
    message: StreamRequest,
    reader: jspb.BinaryReader,
  ): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    id: number;
  };
}

export class ChatStreamResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ChatStreamResponse;

  getMessage(): string;
  setMessage(value: string): ChatStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatStreamResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ChatStreamResponse,
  ): ChatStreamResponse.AsObject;
  static serializeBinaryToWriter(
    message: ChatStreamResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChatStreamResponse;
  static deserializeBinaryFromReader(
    message: ChatStreamResponse,
    reader: jspb.BinaryReader,
  ): ChatStreamResponse;
}

export namespace ChatStreamResponse {
  export type AsObject = {
    id: number;
    message: string;
  };
}

export enum Status {
  UNKNOWN = 0,
  ONLINE = 1,
  OFFLINE = 2,
}
