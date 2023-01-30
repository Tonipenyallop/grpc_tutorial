import * as jspb from 'google-protobuf';

export class PingRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PingRequest,
  ): PingRequest.AsObject;
  static serializeBinaryToWriter(
    message: PingRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(
    message: PingRequest,
    reader: jspb.BinaryReader,
  ): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    message: string;
  };
}

export class PingResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PingResponse,
  ): PingResponse.AsObject;
  static serializeBinaryToWriter(
    message: PingResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(
    message: PingResponse,
    reader: jspb.BinaryReader,
  ): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    message: string;
  };
}

export class RandomNumbersRequest extends jspb.Message {
  getMaxval(): number;
  setMaxval(value: number): RandomNumbersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RandomNumbersRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RandomNumbersRequest,
  ): RandomNumbersRequest.AsObject;
  static serializeBinaryToWriter(
    message: RandomNumbersRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): RandomNumbersRequest;
  static deserializeBinaryFromReader(
    message: RandomNumbersRequest,
    reader: jspb.BinaryReader,
  ): RandomNumbersRequest;
}

export namespace RandomNumbersRequest {
  export type AsObject = {
    maxval: number;
  };
}

export class RandomNumbersResponse extends jspb.Message {
  getNum(): number;
  setNum(value: number): RandomNumbersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RandomNumbersResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RandomNumbersResponse,
  ): RandomNumbersResponse.AsObject;
  static serializeBinaryToWriter(
    message: RandomNumbersResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): RandomNumbersResponse;
  static deserializeBinaryFromReader(
    message: RandomNumbersResponse,
    reader: jspb.BinaryReader,
  ): RandomNumbersResponse;
}

export namespace RandomNumbersResponse {
  export type AsObject = {
    num: number;
  };
}

export class TodoListRequest extends jspb.Message {
  getTodo(): string;
  setTodo(value: string): TodoListRequest;

  getStatus(): string;
  setStatus(value: string): TodoListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoListRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TodoListRequest,
  ): TodoListRequest.AsObject;
  static serializeBinaryToWriter(
    message: TodoListRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TodoListRequest;
  static deserializeBinaryFromReader(
    message: TodoListRequest,
    reader: jspb.BinaryReader,
  ): TodoListRequest;
}

export namespace TodoListRequest {
  export type AsObject = {
    todo: string;
    status: string;
  };
}

export class TodoListResponse extends jspb.Message {
  getTodolistsList(): Array<TodoListRequest>;
  setTodolistsList(value: Array<TodoListRequest>): TodoListResponse;
  clearTodolistsList(): TodoListResponse;
  addTodolists(value?: TodoListRequest, index?: number): TodoListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoListResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TodoListResponse,
  ): TodoListResponse.AsObject;
  static serializeBinaryToWriter(
    message: TodoListResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): TodoListResponse;
  static deserializeBinaryFromReader(
    message: TodoListResponse,
    reader: jspb.BinaryReader,
  ): TodoListResponse;
}

export namespace TodoListResponse {
  export type AsObject = {
    todolistsList: Array<TodoListRequest.AsObject>;
  };
}

export class ChatRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ChatRequest,
  ): ChatRequest.AsObject;
  static serializeBinaryToWriter(
    message: ChatRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChatRequest;
  static deserializeBinaryFromReader(
    message: ChatRequest,
    reader: jspb.BinaryReader,
  ): ChatRequest;
}

export namespace ChatRequest {
  export type AsObject = {
    message: string;
  };
}

export class ChatResponse extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): ChatResponse;

  getMessage(): string;
  setMessage(value: string): ChatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ChatResponse,
  ): ChatResponse.AsObject;
  static serializeBinaryToWriter(
    message: ChatResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChatResponse;
  static deserializeBinaryFromReader(
    message: ChatResponse,
    reader: jspb.BinaryReader,
  ): ChatResponse;
}

export namespace ChatResponse {
  export type AsObject = {
    username: string;
    message: string;
  };
}
