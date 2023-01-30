// Original file: proto/chatPackage.proto

import type {
  Status as _chatPackage_Status,
  Status__Output as _chatPackage_Status__Output,
} from '../chatPackage/Status';

export interface User {
  id?: string;
  username?: string;
  status?: _chatPackage_Status;
  avatarUrl?: string;
}

export interface User__Output {
  id?: string;
  username?: string;
  status?: _chatPackage_Status__Output;
  avatarUrl?: string;
}
